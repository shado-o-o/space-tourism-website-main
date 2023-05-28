//code the crew bage change betown the element
new Vue({
    el:"#crew-other-change",
    data:{
        name1:'',
        name2:'background:white',
        name3:'',
        name4:'',
        number:'02',
        intro:'Meet your crew',
        name_user:'Anousheh Ansari',
        Flight:'Flight Engineer',
        src_img:'../assets/crew/image-anousheh-ansari.png',
        pargraph:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'

    },
    methods:{
        change:function(dgree){
         if(dgree==1){
            return this.name1='background:white;',
            this.name2=this.name3=this.name4='',
            this.number='01',
            this.intro='Meet your crew Commander',
            this.name_user='Douglas Hurley ',
            this.Flight=' Douglas Gerald Hurley',
            this.src_img='../assets/crew/image-victor-glover.png',
            this.pargraph='Douglas Hurley Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2';
          }
         else if (dgree==2) {
            return this.name2='background:white;',
            this.name1=this.name3=this.name4='',
            this.number='02',
            this.intro='Meet your crew',
            this.name_user='Anousheh Ansari',
            this.Flight='Flight Engineer',
            this.src_img='../assets/crew/image-anousheh-ansari.png',
            this.pargraph='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.';
          } 
         else if (dgree==3) {
            return this.name3='background:white;',
            this.name2=this.name1=this.name4='',
            this.number='03',
            this.intro='Meet your crew',
            this.name_user='Victor Glover',
            this.Flight='Pilot',
            this.src_img='../assets/crew/image-douglas-hurley.png',
            this.pargraph=' Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64. ';
          }
         else if (dgree==4)    { 
            return this.name4='background:white;',
            this.name2=this.name3=this.name1='',
            this.number='04',
            this.intro='Meet your crew',
            this.name_user='Mark Shuttleworth',
            this.Flight=' Mission Specialist',
            this.src_img='../assets/crew/image-mark-shuttleworth.png',
            this.pargraph='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South  African to travel to space as a space tourist.';
          }
          else{
            return '';
          }
        }

    }
})
//code the destination bage change betwoen the elements
new Vue({
  el:"#dest_nation",
  data:{
    name1:"",
    name2:"border-bottom: 1px solid white; color: aliceblue;",
    name3:"",
    name4:"",
    name:"Mars",
    pragraph:"Moon Mars Europa Titan Mars Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avg:"Avg. distance km Est.",
    mil:"225 mil.",
    time:"travel time",
    mon:" 9 months",
    plan_img:"../assets/destination/image-mars.png"


  },
  methods:{
      change:function(dgree){
       if(dgree==1){
          return this.name1='border-bottom: 1px solid white; color: aliceblue;',
          this.name2=this.name3=this.name4='',
          this.name='Europa',
          this.pragraph=" Moon Mars Europa Titan Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin",
          this.mil='628 mil',
          this.mon=" 3 years",
          
          this.plan_img="../assets/destination/image-europa.png";
          }
       else if (dgree==2) {
          return this.name2='border-bottom: 1px solid white; color: aliceblue;',
          this.name1=this.name3=this.name4='',
          this.name='Mars',
          this.pragraph="Moon Mars Europa Titan Mars Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          this.mil='225 mil.',
          this.mon="9 months",
         
          this.plan_img="../assets/destination/image-mars.png";
         } 
       else if (dgree==3) {
          return this.name3='border-bottom: 1px solid white; color: aliceblue;',
          this.name2=this.name1=this.name4='',
          this.name='Moon',
          this.pragraph="Moon Mars Europa Titan Moon See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
          this.mil='384,400.',
          this.mon="3 days",
          this.plan_img="../assets/destination/image-moon.png";
        }
       else if (dgree==4)    { 
          return this.name4='border-bottom: 1px solid white; color: aliceblue;',
          this.name2=this.name3=this.name1='',
          this.name='Titan',
          this.pragraph=" Moon Mars Europa Titan Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          this.mil=' 1.6 bil.',
          this.mon="7 years",
          this.plan_img="../assets/destination/image-titan.png";
         
         }
        else{
          return '';
        }
  }
  }
})
//code rhe technology page change betwon the elements
new Vue({
  el:"#technology",
  data:{
    name1:"",
    name2:"background:white; color:black;",
    name3:"",
    number:"02",
    name:"Space launch 101",
    name_pro:"The terminology...",
    name_descrp:"SPACE CAPSULE",
    name_p:"Space capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    name_img:"../assets/technology/image-space-capsule-portrait.jpg",
  },
  methods:{
    change:function(dgree){
      if(dgree==1){
         return this.name1='background:white;color:black;',
         this.name2=this.name3=this.name4='',
         this.number="01",
         this.name="Space launch 101",
         this.name_pro="The terminology...",
         this.name_descrp="SPACE PORT",
         this.name_p="Spaceport A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
         this.name_img="../assets/technology/image-spaceport-landscape.jpg";
  
         }
      else if (dgree==2) {
         return this.name2='background:white;color:black;',
         this.name1=this.name3=this.name4='',
         this.number="02",
         this.name="Space launch 101",
         this.name_pro="The terminology...",
         this.name_descrp="SPACE CAPSULE ",
         this.name_p="Space capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
         this.name_img="../assets/technology/image-space-capsule-portrait.jpg";
        } 
      else if (dgree==3) {
         return this.name3='background:white;color:black;',
         this.name2=this.name1=this.name4='',
         this.number="03",
         this.name="Space launch 101",
         this.name_pro="The terminology...",
         this.name_descrp="LUANCH VEHICLE",
         this.name_p="Launch vehicle A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
         this.name_img="../assets/technology/image-launch-vehicle-portrait.jpg";
  
       }
 }

  }
})
