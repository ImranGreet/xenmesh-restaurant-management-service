import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderStore = defineStore('orderStore', () => {
  // State
  const orders = ref([]);
  const order = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Utility to set loading and error
  const setLoading = (state) => { loading.value = state };
  const setError = (message) => { error.value = message };

  // Create Order
  const createOrder = async (orderData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/order/create_order', orderData);
      orders.value.push(response.data.order); // Append new order
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create order.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update Order
  const updateOrder = async (id, orderData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`/api/order/update_order/${id}`, orderData);
      const updatedOrder = response.data.order;
      const index = orders.value.findIndex(order => order.id === id);
      if (index !== -1) orders.value[index] = updatedOrder;
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update order.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Retrieve Orders
  const retrieveOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/our_order');
      orders.value = response.data.orders.data || []; // Handle pagination structure
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to retrieve orders.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Retrieve Orders by Type
  const retrieveOrdersByType = async (orderType) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/orders/${orderType}`);
      orders.value = response.data.orders.data || [];
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || `Failed to retrieve orders for type ${orderType}.`);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete Order
  const deleteOrder = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`/api/order/deleteOrder/${id}`);
      orders.value = orders.value.filter(order => order.id !== id); // Remove deleted order
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete order.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Return State and Methods
  return {
    orders,
    order,
    loading,
    error,
    createOrder,
    updateOrder,
    retrieveOrders,
    retrieveOrdersByType,
    deleteOrder,
  };
});
