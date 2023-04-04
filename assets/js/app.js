/* 
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
*/

const { createApp } = Vue;
createApp({
    data() {
        return {
            activeChat: 0,
            newMessage: '',
            search: '',
            darkMode: false,
            showContacts: true,
            showDropdown: -1,
            showContextMenu: false,
            randomResponse: [
                "Va bene😎","Non lo so😅","Potrebbe essere😄","Dipende","Probabilmente🤣","Non ci ho mai pensato🤯","Sono d'accordo con te👌","Non sono sicuro❌","Può darsi😉","Non ho una risposta definitiva🤗","Non mi importa😑","Non ho un'opinione precisa😑","Forse😄","Mi sembra ragionevole😌","Non ne ho idea😟","Non sono sicuro di capire🤪","Potremmo discuterne😄","Non voglio rispondere❌","Puoi spiegare meglio?","OK, come vuoi😎","Beh, dipende dal contesto😅","Non saprei cosa dire😎","Non sono sicura di essere d'accordo","Potrebbe essere possibile😎","Sono aperto a nuove idee🛫","Non ho un'opinione forte su questo argomento","Non vedo l'ora di scoprirlo😎","È una possibilità😎","Non ho mai pensato a questo prima d'ora","Sarà interessante vedere cosa succederà🤪",
              ],
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }

    },
    methods: {

        /* change contact on click */
        activeChat_change(index) {
            this.activeChat = index
        },
        
        /* New message input */
        newMessageGenerated() {
            /* Current Time */
            let now = this.currentTime()
            /* new message generated */
            this.contacts[this.activeChat].messages.push( {
                date: now,
                message: this.newMessage,
                status: 'sent'
            } )
            /* reset input */
            this.newMessage = ''
        },

        /* reply */
        requestNewMessage() {
            this.contacts[this.activeChat].messages.push({
                date: this.currentTime(),
                message: this.randomizedResponse(this.randomResponse.length -1),
                status: 'received'
            } )
        },

        /* response generation time */
        messageGeneratedTime() {
            if (this.newMessage === "" || this.newMessage.trim().length === 0) {
                /* Prevent the user from sending a message that is blank or consists only of spaces */
                return;
            } else {
                /* generate message --> setTimeout 1s --> reply message */
                this.newMessageGenerated();
                setTimeout(() => { this.requestNewMessage() }, 1000);
            }
        },

        /* Time now */
        currentTime() {
            let now = new Date();
            let day = now.getDate();
            let month = now.getMonth() + 1;
            let year = now.getFullYear();
            let hours = now.getHours();
            let minutes = now.getMinutes();
          
            if (day <= 9) {
              day = '0' + day;
            }
            if (month <= 9) {
              month = '0' + month;
            }
            if (hours <= 9) {
              hours = '0' + hours;
            }
            if (minutes <= 9) {
              minutes = '0' + minutes;
            }
            return `${day}/${month}/${year} ${hours}:${minutes}`;
        },

        /* Toggle Dark Mode */
        toggleDarkMode() {
            const styleCss = document.getElementById('style_css');
            const darkMode = document.getElementById('dark_mode');
            if (styleCss.disabled) {
                styleCss.disabled = false;
                darkMode.disabled = true;
            } else {
                styleCss.disabled = true;
                darkMode.disabled = false;
            }
        },

        //show all contacts otherwise  filter them 
        filterContacts(){
            if (this.search === '') {
                this.showContacts = true; 
                return this.contacts;
              } else {
                this.showContacts = false; 
                return this.contacts.filter((user) => user.name.toLowerCase().includes(this.search.toLowerCase().trim()));
              }
        },

        /* Show Menu */
        showMenu(index) {
            this.showDropdown = this.showDropdown === index ? null : index;
            this.showContextMenu = true
          },

        /* Remove message */
        removeMessage(index) {
            this.contacts[this.activeChat].messages.splice(index, 1);
        },

        /* Random Response */
        randomizedResponse(max) {
            return this.randomResponse[Math.floor(Math.random() * (max + 1))];
        },
        
    },

}).mount('#app')


