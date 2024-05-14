<template>
    <a-layout>
        <a-layout-header
            class="header"
            :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
        >
            <div class="containerLogo">
                <div class="logo"><img :src="WakLogo" alt="" /></div>
            </div>
            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="horizontal"
                :style="{
                    lineHeight: '80px',
                    paddingLeft: '20px',
                    width: '70%',
                }"
            >
                <a-menu-item @click="router.push('/')" key="1"
                    >Acceuil</a-menu-item
                >
                <a-menu-item key="2"
                    ><a href="https://wakshop.tebex.io/" target="_blank"
                        >Shop</a
                    ></a-menu-item
                >
                <a-menu-item @click="router.push('/leaderboard')" key="3"
                    >Leaderboard</a-menu-item
                >
                <a-menu-item
                    ><a-dropdown>
                        <a class="ant-dropdown-link" @click.prevent>
                            Servers
                            <DownOutlined />
                        </a>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <a href="/"
                                        >2 man Wak Server (start 24 mai)</a
                                    >
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="/"
                                        >4 man Wak Server (start 10 mai)</a
                                    >
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </a-menu-item>
            </a-menu>
            <div class="container">
                <a-button
                    class="buttonStyle"
                    shape="round"
                    @click="copyClipboard()"
                    :size="size"
                >
                    <template #icon>
                        <CopyOutlined />
                    </template>
                    83.147.29.33
                </a-button>
                <a-button class="buttonStyle button" shape="round" :size="size">
                    <template #icon>
                        <i class="fa fa-discord"></i>
                    </template>
                    Discord
                </a-button>
            </div>
        </a-layout-header>
        <a-layout-content class="content" :style="{ marginTop: '80px' }">
            <div class="content">
                <div class="containerImg">
                    <img class="logo" :src="WakLogo" alt="wakLogo" />
                </div>
                <h1>La page est en cours de construction.</h1>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script setup lang="ts">
import WakLogo from "../assets/logo-X_bleu_discord.png";
import { CopyOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import router from "../router/index";

const ipServer = ref("83.147.29.33");

const copyClipboard = () => {
    navigator.clipboard.writeText(ipServer.value);

    // Alert the copied text
    alert("Copied the text: " + ipServer.value);
};
</script>

<style lang="scss" scoped>
@import "../assets/variables/variables.scss";

.content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: $bg;
}
.containerImg {
    display: flex;
    width: 100%;
    justify-content: center;
    .logo {
        width: 300px;
        height: 300px;
    }
}
h1 {
    color: white;
    font-size: 3rem;
    margin-top: -30rem;
}

.logo {
    width: 60px;
    height: 60px;
    object-fit: content;
    margin-top: 10px;
}
.datatable {
    width: 100%;
}
h1 {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 2.5rem;
}
.header {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    height: 80px;
    background: $color-headings;
    .button {
        margin-left: 0.5rem;
    }
    ul {
        width: 80%;
        height: 100%;
        background: $color-headings;
        li {
            span {
                padding-top: 1rem;
            }
        }
    }
}
.ant-menu-item-selected {
    background: $color-side !important;
}
.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}
.title {
    color: white;
    opacity: 0.7;
}
.site-layout-background {
    background: #fff;
}
.height {
    height: 100% !important;
}

.container {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-content: center;
    justify-content: flex-end;
    width: 20%;
}

:where(.css-dev-only-do-not-override-16pw25h).ant-btn-default {
    background: transparent !important;
    color: white;
}

:where(.css-dev-only-do-not-override-16pw25h) a {
    color: black !important;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-btn-default:not(
        :disabled
    ):hover {
    color: white;
    border-color: white;
}
</style>

<script lang="ts">
export default {
    name: "Construction",
};
</script>
