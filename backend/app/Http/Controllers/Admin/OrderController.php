<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Order;
use App\Models\Admin\OrderItems;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;


class OrderController extends Controller
{
    public function createOrder(Request $request)
    {

        DB::beginTransaction();
        try {
            $order = new Order();

            $order->customer_id             = $request->customer_id ?? 1;
            $order->table_id                = $request->table_no;
            $order->order_time              = Carbon::now();
            $order->order_processing_status = 'Pending';
            $order->status                  = $request->status ?? 'unhold';
            $order->delivery_way            = $request->delivery_way;
            $order->subtotal                = $request->subtotal;
            $order->discount_rate           = $request->discount_rate;
            $order->discount_amount         = $request->discount_amount;
            $order->amount_after_discount   = $request->amount_after_discount;
            $order->special_discount        = $request->special_discount ?? 0;
            $order->total                   = $request->total;
            $order->paid_amount             = $request->paid_amount;
            $order->change_amount           = $request->change_amount ?? 0;
            $order->created_by              = auth()->user()->id;
            $order->save();
            $order->order_number = date('Ymd').'-'.$this->getTodaySaleCount();

            $order->save();

            $items = json_decode($request->purchase_items);

            foreach($items as $key=>$item){

                $order_item = new OrderItems();
                $order_item->order_id           = $order->id;
                $order_item->menu_id            = $item->id;
                $order_item->quantity           = $item->quantity;
                $order_item->price              = $item->price;
                $order_item->total_amount       = $item->price*$item->quantity;
                $order_item->save();

            }

            DB::commit();
            
        } catch (\Throwable $th) {
            DB::rollBack();
        }
    }
}
