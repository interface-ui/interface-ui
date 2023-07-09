<script setup lang="ts">
import { VPTeamMembers } from "vitepress/theme";

const teamMembers = [
  {
    avatar: "https://www.github.com/tsinghua-lau.png",
    name: "tsinghua-lau",
    title: "Author of PusionUI",
    links: [{ icon: "github", link: "https://github.com/tsinghua-lau" }],
  },
];
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <h2 id="meet-the-team" op50 font-normal p="t-10 b-2">
            Meet The Team
          </h2>
        </div>
        <div p-10>
          <VPTeamMembers size="small" :members="teamMembers" />
        </div>
      </main>
    </div>
  </div>
</template>
