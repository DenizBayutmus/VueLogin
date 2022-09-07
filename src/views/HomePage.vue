<template>
      <!-- ! HEADER -->
    <div class="header-container">
      <nav class="flex w-full px-2">
        <div class="flex text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current mr-2" height="36" viewBox="0 0 24 24" width="36">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 2v5l-1-.75L15 9V4h2zm3 12H8V4h5v9l3-2.25L19 13V4h1v12z" />
          </svg>
          Login Proje
        </div>
        <div class="ml-auto flex items-center">
          <div class="relative group">
            <button class="w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-500 hover:bg-gray-200 group-focus-within:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" class="fill-current" width="24">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>
            <nav class="bg-white !z-10 rounded-md shadow-md p-2 w-56 flex flex-col absolute group-focus-within:visible top-full right-0 invisible">
              <a href="#" class="mb-2 menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" class="fill-current mr-1" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
                </svg>
                Account
              </a>

              <a @click="onLogout" href="#" class="menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="fill-current mr-1" height="24" viewBox="0 0 24 24" width="24">
                  <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
                  <g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" /></g>
                </svg>
                Logout</a
              >
            </nav>
          </div>
        </div>
      </nav>
    </div>
    <!-- ! HEADER -->

    <div class="flex flex-row">
      <aside class="sidebar">
        <a class="sidebar-item" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current mr-3" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" />
          </svg>
          Vue.js
        </a>
        <a class="sidebar-item" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current mr-3" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" />
          </svg>
          Frontend
        </a>
        <a class="sidebar-item" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current mr-3" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" />
          </svg>
          Backend
        </a>
        <a class="sidebar-item" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current mr-3" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" />
          </svg>
          Web
        </a>
      </aside>
    </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    computed: {
      ...mapGetters(["_isAuthenticated"])
    },
    methods: {
      onLogout() {
        this.$store.commit("logoutUser");
        this.$router.push({ name: "LoginPage" });
      }
    }
  };
  </script>

