import shiva from "./assets/shivling.png";
import ganesha from "./assets/ganesha.png";
import krishna from "./assets/krishna.png";
import devi from "./assets/devi.png";

export enum Deity {
  Shiva,
  Shakti,
  Ganesh,
  Krishna,
  Ram,
}

export enum Event {
  Aarti,
  Darshan,
}

export const templeList = [
  {
    name: "Kashi Vishwanath",
    lat: 25.31117014698801,
    long: 83.01070676753777,
    location: "Lahori Tola, Varanasi, Uttar Pradesh",
    about:
      "Landmark riverside temple to Shiva, known for its 18th-century gold-plated spire and sacred well.",
    icon: shiva,
    deity: Deity.Shiva,
    event: Event.Aarti,
    video: "https://www.youtube.com/embed/4ZrPcNtIoT8",
  },
  {
    name: "Shri Mahakaleshwar Jyotirlinga Temple",
    lat: 23.183037304479992,
    long: 75.7682510411447,
    icon: shiva,
    location: " Mahankal Mandir, Jaisinghpura, Ujjain, Madhya Pradesh ",
    about:
      "Possibly dating from 6th century B.C., this 3-storey temple is one of the holiest devoted to Shiva.",
    deity: Deity.Shiva,
    event: Event.Darshan,
    video: "https://www.youtube.com/embed/zf_Erocy34w",
  },
  {
    name: "Shri Siddhivinayak Temple",
    lat: 19.0143933007135,
    long: 72.83211631200768,
    icon: ganesha,
    location: "SK Bole Rd, Prabhadevi, Mumbai, Maharashtra",
    about:
      "Dedicated to Ganesha, this grand Hindu temple features an inner gold-plated roof & carved doors.",
    deity: Deity.Ganesh,
    event: Event.Aarti,
    video: "https://www.youtube.com/embed/5-Qv9y1_7xI?si=H930UU6meTy60YPh",
  },
  {
    name: "Hare Krishna Golden Temple",
    lat: 17.41109845443338,
    long: 78.43060552328086,
    icon: krishna,
    location: "NBT Nagar, Banjara Hills, Hyderabad, Telangana",
    about:
      "Lavish Hare Krishna temple featuring stepped towers, elaborate pillars & a courtyard.",
    deity: Deity.Krishna,
    event: Event.Darshan,
    video: "https://www.youtube.com/embed/Syd36qiXixk",
  },
  {
    name: "Shaktipeeth Mata Shri Naina Devi Temple",
    lat: 31.30617510816957,
    long: 76.53716279476959,
    about:
      "Mountaintop Hindu temple featuring golden pinnacles & marble walls, accessible by cable car.",
    location: "Naina Devi, Himachal Pradesh",
    icon: devi,
    deity: Deity.Shakti,
    event: Event.Aarti,
    video: "https://www.youtube.com/embed/fcQ8IWedphs",
  },
];
