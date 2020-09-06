<template>
    <div>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                dark
                v-bind="attrs"
                v-on="on"
                >
                My Links
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :href="item.link"
                    target="_blank"
                >
                    <v-list-icon><v-icon>{{ item.icon }}</v-icon></v-list-icon>
                    <v-list-item-title>&nbsp;{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import { mdiGithub, mdiLinkedin } from '@mdi/js'

export default {
    data() {
        return {
            items: [
                { 
                    title: 'Github', 
                    link: "https://github.com/bsnman", 
                    icon: mdiGithub 
                },
                { 
                    title: 'LinkedIn', 
                    link: "https://www.linkedin.com/in/radih-jr-paraguas-b1a468154/", 
                    icon: mdiLinkedin
                },
            ],
        }
    },
}
</script>

