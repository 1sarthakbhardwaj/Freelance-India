






<!--the end-->

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader>Today</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(item, i) in items"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row>
              <v-flex
              sm12 md8 lg 6
              >
                <v-avatar
                  size="36px"
                >
                  <img
                    v-if="item.avatar"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                  <v-icon
                    v-else
                    :color="item.color"
                    v-text="item.icon"
                  ></v-icon>
                </v-avatar>
              </v-flex>

              <v-flex
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-html="item.name"></strong>
               
              </v-flex>

              <v-flex
                class="text-no-wrap"
                cols="5"
                sm="3"
              >
                <v-chip
                  v-if="item.new"
                  :color="`${item.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ item.new }} new
                </v-chip>
                <strong v-html="item.title"></strong>
              </v-flex>

              <v-flex
                v-if="item.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ item.excerpt }}
              </v-flex>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="item.text"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
       items: [
          { title: 'Dashboard', icon: 'dashboard', text :"sadasdsadhdefjklsad "},
          { title: 'Project', icon: 'folder', text :"dasdasdefjklsad "},
          { title: 'Team', icon: 'person',text :"abchdefjklsad "},
        
      ],
    }),
  }
</script>