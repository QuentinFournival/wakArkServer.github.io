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
                <a
                    href="https://discord.gg/J6sntKxzED"
                    target="_blank"
                    class="buttonStyle css-dev-only-do-not-override-16pw25h ant-btn ant-btn-round ant-btn-default button"
                    shape="round"
                    :size="size"
                >
                    Discord
                </a>
            </div>
        </a-layout-header>
        <a-layout-content
            class="content"
            :style="{ padding: '20px 50px', marginTop: '80px' }"
        >
            <h1>Leaderboard</h1>
            <a-tabs class="datatable" v-model:activeKey="activeKey">
                <a-tab-pane key="1" tab="Tributs">
                    <a-input
                        class="inputSearch"
                        v-model:value="search"
                        placeholder="Recherche tribu" />
                    <a-table
                        class="datatable"
                        :columns="columnsTribut"
                        :data-source="searchTribu"
                        @change="onChange"
                    ></a-table
                ></a-tab-pane>
                <a-tab-pane key="2" tab="Players" force-render>
                    <a-input
                        class="inputSearch"
                        v-model:value="searchPlayer"
                        placeholder="Recherche Joueur" />
                    <a-table
                        class="datatable"
                        :columns="columnsPlayer"
                        :data-source="searchPlayers"
                        @change="onChange"
                    ></a-table
                ></a-tab-pane>
            </a-tabs>
        </a-layout-content>
    </a-layout>
</template>
<script lang="ts" setup>
import { computed, onBeforeMount, ref } from "vue";
import WakLogo from "../assets/logo-X_bleu_discord.png";
import { CopyOutlined } from "@ant-design/icons-vue";
import router from "../router/index";
import axios from "axios";
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from "@ant-design/icons-vue";
const selectedKeys1 = ref<string[]>(["2"]);
const selectedKeys2 = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const search = ref("");
const searchPlayer = ref("");
const ipServer = ref("83.147.29.33");

const leaderboards = ref([]);
const playerStats = ref([]);

const fetchLeaderboards = async () => {
    try {
        const response = await axios.get("http://localhost:3000/leaderboards");
        const data = await response.data.sort(
            (a, b) => b.DamageScore - a.DamageScore
        );
        const tribe = data.map((tribe, index) => {
            return {
                rank: index + 1,
                ...tribe,
            };
        });
        leaderboards.value = tribe;
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des leaderboards :",
            error
        );
    }
};

// Fonction pour récupérer les statistiques des joueurs depuis l'API
const fetchPlayerStats = async () => {
    try {
        const response = await axios.get("http://localhost:3000/playerStats");
        const data = await response.data.sort(
            (a, b) => b.PlayerKills - a.PlayerKills
        );
        const players = data.map((player, index) => {
            const timePlayed = player.PlayTime / 60;
            const kda =
                player.DeathByPlayer > 0
                    ? player.PlayerKills / player.DeathByPlayer
                    : player.PlayerKills;
            return {
                rank: index + 1,
                PlayTime: timePlayed + "H",
                KDA: kda.toFixed(2),
                ...player,
            };
        });
        console.log(players);
        playerStats.value = players;
    } catch (error) {
        console.error(
            "Erreur lors de la récupération des statistiques des joueurs :",
            error
        );
    }
};
const searchTribu = computed(() =>
    leaderboards.value.filter((tribu) => {
        return tribu.TribeName.toLowerCase().includes(
            search.value.toLowerCase()
        );
    })
);
const searchPlayers = computed(() =>
    playerStats.value.filter((player) => {
        return player.PlayerName.toLowerCase().includes(
            searchPlayer.value.toLowerCase()
        );
    })
);
const copyClipboard = () => {
    navigator.clipboard.writeText(ipServer.value);

    // Alert the copied text
    alert("Copied the text: " + ipServer.value);
};
onBeforeMount(() => {
    fetchLeaderboards();
    fetchPlayerStats();
});

const columnsTribut = [
    {
        title: "Rank",
        dataIndex: "rank",
        sorter: (a, b) => a.rank - b.rank,
    },
    {
        title: "Tribe name ",
        dataIndex: "TribeName",
        sorter: {
            compare: (a, b) => a.TribeName.length - b.TribeName.length,
            multiple: 2,
        },
    },
    {
        title: "Damage Score",
        dataIndex: "DamageScore",
        sorter: {
            compare: (a, b) => a.DamageScore - b.DamageScore,
            multiple: 2,
        },
    },
];

const columnsPlayer = [
    {
        title: "Rank",
        dataIndex: "rank",
        sorter: (a, b) => a.rank - b.rank,
    },
    {
        title: "Player Name ",
        dataIndex: "PlayerName",
        sorter: {
            compare: (a, b) => a.PlayerName.length - b.PlayerName.length,
            multiple: 2,
        },
    },
    {
        title: "Player Tribe",
        dataIndex: "TribeName",
        sorter: {
            compare: (a, b) => a.TribeName.length - b.TribeName.length,
            multiple: 2,
        },
    },
    {
        title: "Time played",
        dataIndex: "PlayTime",
        sorter: {
            compare: (a, b) => a.PlayTime - b.PlayTime,
            multiple: 2,
        },
    },
    {
        title: "Player Kill",
        dataIndex: "PlayerKills",
        sorter: {
            compare: (a, b) => a.PlayerKills - b.PlayerKills,
            multiple: 2,
        },
    },
    {
        title: "Player Death",
        dataIndex: "DeathByPlayer",
        sorter: {
            compare: (a, b) => a.DeathByPlayer - b.DeathByPlayer,
            multiple: 2,
        },
    },
    {
        title: "Player KDA",
        dataIndex: "KDA",
        sorter: {
            compare: (a, b) => a.KDA - b.KDA,
            multiple: 2,
        },
    },
];
</script>
<style lang="scss" scoped>
@import "../assets/variables/variables.scss";

.logo {
    width: 60px;
    height: 60px;
    object-fit: content;
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
:where(.css-dev-only-do-not-override-16pw25h).ant-btn-default:not(
        :disabled
    ):hover {
    color: white;
    border-color: white;
}
.inputSearch {
    width: 20%;
    position: absolute;
    right: 0;
    top: -50px;
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
.content {
    margin-top: 1rem;
    background: $bg;
}
.button {
    color: white !important;
}

.container {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-content: center;
    justify-content: flex-end;
    width: 20%;
}
.containerLogo {
    padding-top: 10px;
    width: 4%;
    .buttonStyle {
        background: transparent !important;
    }
}
:where(.css-dev-only-do-not-override-16pw25h).ant-btn-default {
    background: transparent !important;
    color: white;
}

:where(.css-dev-only-do-not-override-16pw25h) a {
    color: black !important;
}
</style>

<script lang="ts">
export default {
    name: "Leaderboard",
};
</script>
