<template>
      <div class="w-full max-w-md px-2  sm:px-0">
        <TabGroup>
          <TabList class="flex space-x-1 rounded-t-xl bg-blue-900/80 p-1">
            <Tab
              v-for="category in Object.keys(categories)"
              as="template"
              :key="category"
              v-slot="{ selected }"
            >
              <button
                :class="[
                  'w-full rounded-t-lg py-1.5 xl:py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                ]"
              >
                {{ category }}
              </button>
            </Tab>
          </TabList>
    
          <TabPanels class="mt-2 ">
            <TabPanel
              v-for="(posts, idx) in Object.values(categories)"
              :key="idx"
              :class="[
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              ]"
            >
              <ul>
                <li
                  v-for="post in posts"
                  :key="post.id"
                  class="relative rounded-md p-2 2xl:p-3 hover:bg-gray-100"
                >
                  <h3 class="text-sm font-medium leading-5">
                    {{ post.title }}
                  </h3>
    
                  <ul
                    class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
                  >
                    <li>{{ post.date }}</li>
                    <li>&middot;</li>
                    <li>{{ post.commentCount }} comments</li>
                    <li>&middot;</li>
                    <li>{{ post.shareCount }} shares</li>
                  </ul>
    
                  <a
                    href="#"
                    :class="[
                      'absolute inset-0 rounded-md',
                      'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                    ]"
                  />
                </li>
              </ul>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </template>
    
    <script setup>
    import { ref } from 'vue'
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    
    const categories = ref({
      Customer: [
        {
          id: 1,
          title: 'Does drinking ',
          date: '5h ago',
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "So you've bought ",
          date: '2h ago',
          commentCount: 3,
          shareCount: 2,
        },
      ],
      Delivery : [
        {
          id: 1,
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 7',
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: 'The most innovative ',
          date: 'Mar 19',
          commentCount: 24,
          shareCount: 12,
        },
      ],
      Payment: [
        {
          id: 1,
          title: 'Ask Me Anything: 10 answers',
          date: '2d ago',
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ",
          date: '4d ago',
          commentCount: 1,
          shareCount: 2,
        },
      ],
      Table: [
        {
          id: 1,
          title: 'Ask Me Anything:' ,
          date: '2d ago',
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice w",
          date: '4d ago',
          commentCount: 1,
          shareCount: 2,
        },
      ],
    })
    </script>
    