<template>
    <section
        class="max-h-screen min-h-screen flex justify-between relative"
        :class="{
            'w-3/4 mx-auto': boxModel,
            'w-full': !boxModel,
            'w-[90%] mx-auto ': ditachedModel,
        }">
        <Placing
            class="absolute inset-y-0 right-0"
            :class="{ block: rightSideBar, hidden: !rightSideBar }" />
        <Leftsidebar :class="{ 'w-1/6': !sidebarController, 'w-1/12': sidebarController }" />
        <section
            class="flex flex-col justify-between"
            :class="{ 'w-5/6 ': !sidebarController, 'w-11/12': sidebarController }">
            <Topbar
                :class="{
                    'w-full': !boxModel,
                    'w-3/4 mx-auto': boxModel,
                    'fixed inset-x-0 ': fixed,
                    static: !fixed,
                }" />
            <section
                class="w-full bg-gray-100"
                :class="{ 'mt-16': fixed }">
                <p
                    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iste, non odit
                    nobis magni cumque quisquam pariatur voluptas, error, aliquid est tenetur quia
                    culpa deleniti vitae tempore voluptatem. Sed illo nihil quia, necessitatibus
                    dolore accusamus vero laboriosam, saepe laborum repellendus et in itaque. Ea,
                    voluptate fuga delectus pariatur recusandae, omnis ad totam sapiente id rerum
                    qui iure libero error perspiciatis ex! Sed, repellat nam maiores soluta alias
                    totam autem animi necessitatibus voluptatum vel fugit dicta consectetur nobis
                    iusto accusamus expedita est quisquam aliquam explicabo. Nam facere tempore
                    alias repellat obcaecati eligendi temporibus! Deserunt, accusantium deleniti?
                    Dicta at adipisci rerum numquam ipsa suscipit laudantium aliquam, excepturi nam
                    enim. Unde nobis laudantium culpa illo consectetur quaerat explicabo recusandae
                    dolorum, tempora tempore quidem praesentium molestiae, optio natus! Aspernatur
                    dolores ducimus odio nostrum nam dicta maiores, non vero exercitationem incidunt
                    est fuga repellat quod molestiae ipsam! Aperiam tenetur fuga esse asperiores
                    praesentium earum corrupti obcaecati quis deleniti quas, blanditiis rerum quod
                    facilis iste consequatur eius autem ad voluptatibus ipsam cumque rem. Odit
                    officiis sapiente quis tenetur quaerat corporis aperiam animi perspiciatis
                    dolore cumque veritatis et maiores assumenda quo, reiciendis similique. Enim,
                    explicabo minus iste perspiciatis, et numquam in voluptatibus, ex possimus
                    laborum necessitatibus alias eum recusandae. Iusto suscipit inventore maiores,
                    quo delectus animi sapiente nulla nisi nobis esse. Quod est natus obcaecati
                    eaque qui deleniti odit eum ullam, sint quae perspiciatis incidunt quasi rem
                    ducimus modi ipsa consequatur beatae sunt? Atque sequi quis laborum eum maxime
                    nostrum magnam a necessitatibus adipisci commodi earum doloribus voluptatem
                    voluptates quas ipsum, culpa nesciunt libero possimus, accusantium aliquam
                    deserunt quasi autem? Vel commodi est nam sunt incidunt, ut impedit optio quasi
                    dignissimos amet laborum rem iure maxime beatae consectetur facere nisi autem
                    quas nihil modi veniam distinctio dicta? Aperiam est iure incidunt officia
                    molestias accusamus nulla numquam, beatae illum quam, quas autem cum quisquam
                    aliquam maxime obcaecati labore dolor explicabo debitis quia repudiandae
                    perspiciatis magni. Libero accusamus dolorem dignissimos est nam magni a unde
                    repellendus ratione asperiores, eos quod voluptate, officiis vitae quis? Ipsum,
                    aut ratione. Blanditiis officiis, alias asperiores esse vel delectus eligendi,
                    expedita, quisquam dolorem molestiae omnis. Nesciunt, optio eveniet voluptatum
                    commodi quia repudiandae facilis a eos earum perferendis neque inventore non
                    dolorem dolor laudantium repellat beatae praesentium culpa dolorum numquam
                    quidem? Repudiandae, quod culpa. Iure sed, libero natus necessitatibus doloribus
                    minima perferendis vitae nesciunt consequatur itaque quis a. Voluptates nihil
                    odit dolor voluptatibus. Voluptatem cum culpa nisi ratione! In consequatur,
                    nostrum soluta perspiciatis ipsa perferendis eligendi non veniam labore autem.
                    Sed commodi blanditiis dignissimos aliquid amet ipsam provident enim! Fugiat
                    deserunt fugit culpa earum dolores iusto, magnam hic perspiciatis consequatur
                    nemo reiciendis sunt soluta necessitatibus tenetur corrupti atque. Iusto, error
                    quod tempora possimus totam molestiae id saepe officiis dicta veniam facere ad
                    voluptatum mollitia eaque qui quaerat, laborum labore quos provident fugiat
                    assumenda? Quas libero delectus accusamus? Eaque voluptas ad nulla molestiae
                    dolore? Tenetur laudantium, consequuntur laboriosam officiis consequatur debitis
                    eaque ullam esse rem optio delectus, dolores quia voluptatem nihil aliquid eos
                    fugit voluptas quaerat saepe similique necessitatibus! In quae facilis officia?
                    Perferendis debitis facere atque quia sunt eius dolor distinctio aperiam
                    deleniti, rerum enim quae aliquid doloribus porro nulla iusto sint earum.
                    Ratione voluptate voluptatum pariatur laboriosam, veniam sit harum at dolores
                    soluta tempora expedita sunt aliquam consectetur! Ducimus odio doloremque
                    numquam, omnis iusto nesciunt assumenda quis nisi eligendi perferendis rem. A
                    quis mollitia atque sed vel obcaecati quam officiis quos, nobis rerum ratione
                    aliquid hic, libero recusandae similique eum? Eveniet cupiditate aliquam
                    reiciendis cum saepe fuga animi voluptatum sunt natus veniam eaque minus
                    obcaecati, quo porro laborum molestiae magnam similique aliquid ipsam optio
                    quasi soluta culpa id libero! Repudiandae, ratione. Perferendis, minus nulla
                    deleniti sunt, obcaecati quisquam sit vitae ducimus dignissimos tenetur dolorem
                    veritatis ratione cumque voluptatibus libero laboriosam mollitia odit sint
                    accusantium dicta et amet quasi? Suscipit minima quos exercitationem. Deserunt
                    ab neque quaerat est ratione vitae unde. Fugit ipsa error quos amet alias sint
                    necessitatibus exercitationem quod. Eligendi, itaque repudiandae expedita
                    voluptate quibusdam iste necessitatibus saepe velit sed, voluptates aliquid
                    atque sint! Sunt doloribus facilis voluptatum numquam obcaecati dicta, accusamus
                    sapiente ad assumenda, repudiandae velit quae dolores asperiores ex doloremque
                    illum minima rem maxime laudantium illo officiis magni, aliquid tenetur.
                    Excepturi ad, commodi saepe aperiam deleniti beatae hic ut quisquam voluptatibus
                    porro sequi odio, iure illo, numquam quos aliquam est tenetur.</p
                >
                <router-view></router-view>
            </section>
            <Footer />
        </section>
        <!-- screen absolute -->
        <div
            class="absolute inset-x-0 inset-y-0 bg-gray-400/50"
            :class="{ block: rightSideBar, hidden: !rightSideBar }"></div>
    </section>
</template>

<script>
/*composables*/
import {
    sidebarController,
    toggleSidebar,
    rightSideBar,
    toggleRightSidebar,
    fullscreenElement,
    toggleFullScreen,
    boxToggler,
    boxModel,
    ditachedModel,
} from '../composables/layout';

import { fixed } from '../composables/position';

/*components*/
import Footer from '../components/Footer/Footer.vue';
import Placing from '../components/Settings/Placing.vue';
import Leftsidebar from '../components/Sidebar/Leftsidebar.vue';
import Topbar from '../components/Sidebar/Topbar.vue';

export default {
    name: 'Admin',
    components: {
        Topbar,
        Leftsidebar,
        Footer,
        Placing,
    },
    setup() {
        return {
            /*properties*/
            sidebarController,
            rightSideBar,
            fullscreenElement,
            boxModel,
            ditachedModel,
            /*scroller properties*/
            fixed,

            /*methods*/
            toggleSidebar,
            toggleFullScreen,
            toggleRightSidebar,
            boxToggler,
        };
    },
};
</script>
