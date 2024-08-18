<template>
  <nav
    class="pagination"
    aria-label="Table navigation">
    <span class="pagination__info">
      Showing
      <span class="pagination__info--highlight">1-10</span>
      of
      <span class="pagination__info--highlight">1000</span>
    </span>
    <ul class="pagination__list">
      <li>
        <a
          href="#"
          class="pagination__prev pagination__prev-next">
          <span class="sr-only">Previous</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="pagination__item"
          >1</a
        >
      </li>
      <li>
        <a
          href="#"
          class="pagination__item"
          >2</a
        >
      </li>
      <li>
        <a
          href="#"
          aria-current="page"
          class="pagination__item pagination__item--active"
          >3</a
        >
      </li>
      <li>
        <a
          href="#"
          class="pagination__item"
          >...</a
        >
      </li>
      <li>
        <a
          href="#"
          class="pagination__item"
          >100</a
        >
      </li>
      <li>
        <a
          href="#"
          class="pagination__next pagination__prev-next">
          <span class="sr-only">Next</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
