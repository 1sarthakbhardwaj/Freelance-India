<template>
 <div class="News" >
   
    <v-navigation-drawer
      v-model="drawer"
     
      permanent
      absolute
      

    >
      <v-list-item three-line class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
           <v-list-item-content>
             <div class="mx-4">
        <v-list-item-title class=" black--text  px-2 "> Universal Finity  </v-list-item-title>
        <v-list-item-title>
          <v-icon  >
            place
          </v-icon>
          <span class="grey--text  caption">Bilaspur,India</span>
        </v-list-item-title>
        </div>
        <div class="mx-5">
        <v-list-item-subtitle class="py-1 pr-5 subheading ">
          Full Stack Developer
        </v-list-item-subtitle>
        </div>
      </v-list-item-content>
        
       
         
       
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn class="my-2" block>
            <v-icon left>add</v-icon>
            <span>Create Job</span>
            </v-btn>
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <div style = "margin-left :268px">
      <v-container class= "ma-5">
        <v-card
        raised
        >
          <v-list>
            <v-list-item-group v-model="more" >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="headline mb-1">Developing a website using microservices</div>
                  <v-list-item-title class="overline mb-4  ">Client:
                    <span class="black--text">Jeff Hardy</span>
                  </v-list-item-title>
                  <v-list-item-subtitle class="black--text">Description:
                    <span class="grey--text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora accusamus minus dolor
                      reiciendis commodi, excepturi, quis libero iste consectetur recusandae eos nihil ea nobis nulla. 
                      Esse, quia. Atque, dolores.
                    </span>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar  size="100" >
                  <img src="/angry.png" >
                </v-list-item-avatar>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-subtitle >
                    <v-layout row wrap>
                     <v-flex xs12 md6 class=" black--text pa-4" >
                       Hourly : <span class="grey--text">$10 - $13</span>
                     </v-flex>
                     <v-flex xs12 md6 class=" black--text pa-4" >
                       Project Status : <span class="grey--text">Ongoing</span>
                     </v-flex>
                    </v-layout>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    Skills:
                    <v-chip small class="ma-2" color="primary">
                      node.js
                    </v-chip>
                    <v-chip small  class="ma-2" color="primary">
                      Rest API
                    </v-chip>
                    <v-chip small class="ma-2" color="primary">
                      PostregSQL
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-system-bar height = "45" dark>
            <v-btn  small color ="grey" >
              Submit a proposal
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite_border</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>thumb_down_alt</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>speaker_notes</v-icon>
            </v-btn>
          </v-system-bar>
  
        </v-card>
 
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
     
          // items: [
        //{name : 'sarthak', title : 'deadnuts',avatar : '/fb.png',text : 'lorem ipsum',skills: ['dsfsd','fsdfds','sfsd'],id:'1'},
        //{name : 'game', title : 'yyyyy',avatar : '/fb.png',text : 'bhoot ipsum',skills: ['dsfsd','fsdfds','sfsd'],id:'2'},
        //{name : 'john', title : 'text',avatar : '/girl.png',text : 'zombie ipsum',skills: ['dsfsd','java','sfsd'],id:'3'},
        //{name : 'sarthak', title : 'deadnuts',avatar : '/fb.png',text : 'lorem ipsum',skills: ['dsfsd','fsdfds','sfsd'],id:'1'},
        //{name : 'game', title : 'yyyyy',avatar : '/fb.png',text : 'bhoot ipsum',skills: ['dsfsd','fsdfds','sfsd'],id:'2'},
        
      //]
       drawer: true,
        items: [
          { title: 'My Projects', icon: 'folder' },
          { title: 'Portfolio', icon: 'description' },
          { title: 'Certificatons', icon: 'eco' },
          { title: 'Employment History', icon: 'work' },
          { title: 'Skills', icon: 'mdi-account-group-outline' }
        ],
         projects: [
        { title: 'Design a new website', person: 'Universal Finity', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ],
       
        more: [],
    }),
  }
</script>


