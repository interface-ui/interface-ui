<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const teamMembers = [
  {
    avatar: 'https://www.github.com/tsinghua-lau.png',
    name: 'tsinghua-lau',
    title: 'ikun',
    desc: 'Team member of FusionUI',
    links: [{ icon: 'github', link: 'https://github.com/tsinghua-lau' }],
  },
  {
    avatar: 'https://www.github.com/windlil.png',
    name: 'windlil',
    title: 'An open source developer',
    desc: 'Team member of FusionUI',
    links: [{ icon: 'github', link: 'https://github.com/windlil' }],
  },
  {
    avatar: 'https://www.github.com/kit-AB.png',
    name: 'kit-AB',
    title: 'An open source developer',
    desc: 'Team member of FusionUI',
    links: [{ icon: 'github', link: 'https://github.com/kit-AB' }],
  },
  {
    avatar: 'https://www.github.com/Losonn.png',
    name: 'Losonn',
    title: 'An open source developer',
    desc: 'Team member of FusionUI',
    links: [{ icon: 'github', link: 'https://github.com/Losonn' }],
  },
  {
    avatar: 'https://www.github.com/li-junpeng.png',
    name: 'li-junpeng',
    title: 'An open source developer',
    desc: 'Team member of FusionUI',
    links: [{ icon: 'github', link: 'https://github.com/li-junpeng' }],
  },
]
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <h2 id="meet-the-team" op50 font-normal p="t-10 b-2">
            贡献者
          </h2>
        </div>
        <div p-10>
          <VPTeamMembers size="small" :members="teamMembers" />
        </div>
      </main>
    </div>
  </div>
</template>
