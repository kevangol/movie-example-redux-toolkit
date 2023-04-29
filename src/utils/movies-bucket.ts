import BlackAdam from "../assets/Black-adam.jpg";
import AntMan from "../assets/Antman-quantum.jpg";
import JW1 from "../assets/Jw-1.jpg";
import JW2 from "../assets/Jw-2.jpg";
import JW3 from "../assets/Jw-3.jpg";
import JW4 from "../assets/Jw-4.jpg";
import Shazam1 from "../assets/Shazam-1.jpg";
import Shazam2 from "../assets/Shazam-2.jpg";
import Bholaa from "../assets/Bhola-movie.jpg";

export interface ReviewsModel {
  rating: string;
  totalRatings: string;
}

export interface CasteModel {
  imageLink: string;
  name: string;
  role: string;
}

export interface MovieListModel {
  movieImage: string;
  movieName: string;
  releaseData: string;
  cbfc: string;
  movieType: string;
  duration: string;
  language: Array<string>;
  cast: Array<CasteModel>;
  reviews: ReviewsModel;
}

export interface TitlesAndDescriptionsProps {
  _item: MovieListModel;
}

export interface ReviewRatingProps {
  _item: MovieListModel;
}

export interface CustomButtonProps {
  onClick: () => void;
  buttonTitle: string;
}

export interface CasteProfileProps {
  _caste: CasteModel;
}

const MoviesList: MovieListModel[] = [
  {
    movieImage: BlackAdam,
    movieName: "Black Adam",
    releaseData: "21st October 2022",
    cbfc: "U/A 2022",
    movieType: "Action/Adventure",
    duration: "2h 5m",
    language: ["English", "Hindi", "Tamil", "Telugu"],
    cast: [
      {
        imageLink: "https://flxt.tmsimg.com/assets/235135_v9_bb.jpg",
        name: "Dwayne Johnson",
        role: "Black Adam",
      },
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSD8Yi8g4gL88dSK3cO-bYSsj3O2l0muKyfFgJwMfeVWtROKgvsb-lJ3c5JGIYoGTJZsaXhMxrBl9r8XH0",
        name: "Sarah Shahi",
        role: "Lsis",
      },
      {
        imageLink:
          "https://t0.gstatic.com/images?q=tbn:ANd9GcTzEMn9FI59qysZbAAnImz7GVhhx2Z2rd7xdyB5FXSnDh3YtbIa",
        name: "Henry Cavill",
        role: "Superman",
      },
    ],
    reviews: {
      rating: "4.2",
      totalRatings: "9815",
    },
  },
  {
    movieImage: JW1,
    movieName: "John Wick",
    releaseData: "14th November 2014",
    cbfc: "A 2014",
    movieType: "Action/Thriller",
    duration: "1h 41m",
    language: ["English", "Hindi", "Tamil", "Telugu"],
    cast: [
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTRdXN_WIL5TeeLAz5qpa1R2PqYODHYo10OVGt_zMQ9toJACQvXrMxyC4zfBf_liKcGz-DvHh2VUmC0Myo",
        name: "Keanu Reeves",
        role: "John Wick",
      },
      {
        imageLink:
          "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR4DcIkX1N-6GWxS1MKdj2q-lv7FsMOhuYhEnxxJl_dJFPc1NpRo71zvXlF7aqTWvFV066Pd7tIEshbqNg",
        name: "Ian McShane",
        role: "Winston",
      },
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSN7csk6yAUKqKTmfyj-0KCGYcvLjiflsFhCNeN9-zoAaNt8oXF85oz0Owx7iVAKttTo31PoUA6ylAQDfk",
        name: "Lance Reddick",
        role: "Charon",
      },
    ],
    reviews: {
      rating: "4.6",
      totalRatings: "1577",
    },
  },
  {
    movieImage: JW2,
    movieName: "John Wick: Chapter 2",
    releaseData: "17th February 2017",
    cbfc: "A 2017",
    movieType: "Action/Thriller",
    duration: "2h 2m",
    language: ["English", "Hindi", "Tamil", "Telugu"],
    cast: [
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTRdXN_WIL5TeeLAz5qpa1R2PqYODHYo10OVGt_zMQ9toJACQvXrMxyC4zfBf_liKcGz-DvHh2VUmC0Myo",
        name: "Keanu Reeves",
        role: "John Wick",
      },
      {
        imageLink:
          "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR4DcIkX1N-6GWxS1MKdj2q-lv7FsMOhuYhEnxxJl_dJFPc1NpRo71zvXlF7aqTWvFV066Pd7tIEshbqNg",
        name: "Ian McShane",
        role: "Winston",
      },
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSN7csk6yAUKqKTmfyj-0KCGYcvLjiflsFhCNeN9-zoAaNt8oXF85oz0Owx7iVAKttTo31PoUA6ylAQDfk",
        name: "Lance Reddick",
        role: "Charon",
      },
    ],
    reviews: {
      rating: "4.6",
      totalRatings: "543",
    },
  },
  {
    movieImage: JW3,
    movieName: "John Wick: Chapter 3 – Parabellum",
    releaseData: "17th May 2019",
    cbfc: "A 2019",
    movieType: "Action/Thriller",
    duration: "2h 11m",
    language: ["English", "Hindi", "Tamil", "Telugu"],
    cast: [
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTRdXN_WIL5TeeLAz5qpa1R2PqYODHYo10OVGt_zMQ9toJACQvXrMxyC4zfBf_liKcGz-DvHh2VUmC0Myo",
        name: "Keanu Reeves",
        role: "John Wick",
      },
      {
        imageLink:
          "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR4DcIkX1N-6GWxS1MKdj2q-lv7FsMOhuYhEnxxJl_dJFPc1NpRo71zvXlF7aqTWvFV066Pd7tIEshbqNg",
        name: "Ian McShane",
        role: "Winston",
      },
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSN7csk6yAUKqKTmfyj-0KCGYcvLjiflsFhCNeN9-zoAaNt8oXF85oz0Owx7iVAKttTo31PoUA6ylAQDfk",
        name: "Lance Reddick",
        role: "Charon",
      },
    ],
    reviews: {
      rating: "4.5",
      totalRatings: "1400",
    },
  },
  {
    movieImage: JW4,
    movieName: "John Wick: Chapter 4",
    releaseData: "24th March 2023",
    cbfc: "A 2023",
    movieType: "Action/Neo-noir",
    duration: "2h 49m",
    language: ["English", "Hindi", "Tamil", "Telugu"],
    cast: [
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTRdXN_WIL5TeeLAz5qpa1R2PqYODHYo10OVGt_zMQ9toJACQvXrMxyC4zfBf_liKcGz-DvHh2VUmC0Myo",
        name: "Keanu Reeves",
        role: "John Wick",
      },
      {
        imageLink:
          "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR4DcIkX1N-6GWxS1MKdj2q-lv7FsMOhuYhEnxxJl_dJFPc1NpRo71zvXlF7aqTWvFV066Pd7tIEshbqNg",
        name: "Ian McShane",
        role: "Winston",
      },
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSN7csk6yAUKqKTmfyj-0KCGYcvLjiflsFhCNeN9-zoAaNt8oXF85oz0Owx7iVAKttTo31PoUA6ylAQDfk",
        name: "Lance Reddick",
        role: "Charon",
      },
    ],
    reviews: {
      rating: "4.2",
      totalRatings: "2064",
    },
  },
  {
    movieImage: AntMan,
    movieName: "Ant-Man and the Wasp: Quantumania",
    releaseData: "17th February 2023",
    cbfc: "U/A 2023",
    movieType: "Action/Adventure",
    duration: "2h 5m",
    language: ["English", "Hindi", "Tamil", "Telugu"],
    cast: [
      {
        imageLink:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRe54_5UlAnwdW5M8RgBdZ4whD7GNwvo8mjafmULUnib83wA-YGsYJirPMa1beP2BfAn6ab0aLOd55dSCs",
        name: "Paul Rudd",
        role: "Scott Lang",
      },
      {
        imageLink:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTopMWD37twpYthbc3xWo8oip9Iz5sGrQ0rTnqyky6p2CF4PEl_",
        name: "Jonathan Majors",
        role: "Kang the Conqueror",
      },
      {
        imageLink:
          "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcStOX2O-kC1kGJFkYkzqEb-LMn-ZMQaJh2oAa9OVbrRGIyq_7xrtKfFOg95Aji8MziKbwKPlNK6R-_574g",
        name: "Kathryn Newton",
        role: "Cassandra Lang",
      },
    ],
    reviews: {
      rating: "3.7",
      totalRatings: "2441",
    },
  },
  {
    movieImage: Bholaa,
    movieName: "Bholaa",
    releaseData: "30th March 2023",
    cbfc: "U/A 2023",
    movieType: "Action/Adventure",
    duration: "2h 23m",
    language: ["Hindi", "Tamil", "Telugu"],
    cast: [
      {
        imageLink:
          "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/3/2022_3$largeimg_1928851129.JPG",
        name: "Ajay Devgn",
        role: "Bholaa",
      },
      {
        imageLink:
          "https://popdiaries.com/wp-content/uploads/2022/11/IMG-20221121-WA0001.jpg",
        name: "Tabu",
        role: "Diana Joseph IPS",
      },
      {
        imageLink:
          "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS_HD8F3I--RM1YOH5C9T5lvY0IUGHFjIj1JfeyqC-lqgr8mK0WlFoLetG92md1nOpLIbZ1pt7XHoIm0qo",
        name: "Sanjay Mishra",
        role: "Inspector",
      },
    ],
    reviews: {
      rating: "4.3",
      totalRatings: "2405",
    },
  },
  {
    movieImage: Shazam1,
    movieName: "Shazam!",
    releaseData: "5th April 2019",
    cbfc: "U/A 2019",
    movieType: "Action/Fantasy",
    duration: "2h 12m",
    language: ["English", "Hindi", "Tamil", "Telugu"],
    cast: [
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSs0NEdFPkMlkX75gki2WMaeC9zhJgH_hXsvLL6uSHd89ked4d-P0GniZNF_zyUkxUJ6gKHHQHrFR4CIiw",
        name: "Zachary Levi",
        role: "Shazam!",
      },
      {
        imageLink:
          "https://t1.gstatic.com/images?q=tbn:ANd9GcQEUDRsFpn0_S6gf8JyO4v0jZln7SikWg4ICAOgTxqBOM5vrtj_",
        name: "Asher Angel",
        role: "Shazam!",
      },
      {
        imageLink:
          "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcREN73odghDz056rcmVoeldATWErERXLCZ6ygAwPIHIiNjZw4bX8wk_06uEXA_b6VlyZbb7hqGsV98vUDs",
        name: "Jack Dylan Grazer",
        role: "Freddy Freeman",
      },
    ],
    reviews: {
      rating: "4.3",
      totalRatings: "1169",
    },
  },
  {
    movieImage: Shazam2,
    movieName: "Shazam! Fury of the Gods",
    releaseData: "17th March 2023",
    cbfc: "U/A 2023",
    movieType: "Action/Adventure",
    duration: "2h 10m",
    language: ["English", "Hindi", "Tamil", "Telugu"],
    cast: [
      {
        imageLink:
          "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSs0NEdFPkMlkX75gki2WMaeC9zhJgH_hXsvLL6uSHd89ked4d-P0GniZNF_zyUkxUJ6gKHHQHrFR4CIiw",
        name: "Zachary Levi",
        role: "Shazam!",
      },
      {
        imageLink:
          "https://t1.gstatic.com/images?q=tbn:ANd9GcQEUDRsFpn0_S6gf8JyO4v0jZln7SikWg4ICAOgTxqBOM5vrtj_",
        name: "Asher Angel",
        role: "Shazam!",
      },
      {
        imageLink:
          "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcREN73odghDz056rcmVoeldATWErERXLCZ6ygAwPIHIiNjZw4bX8wk_06uEXA_b6VlyZbb7hqGsV98vUDs",
        name: "Jack Dylan Grazer",
        role: "Freddy Freeman",
      },
    ],
    reviews: {
      rating: "3.7",
      totalRatings: "849",
    },
  },
];

export default MoviesList;
