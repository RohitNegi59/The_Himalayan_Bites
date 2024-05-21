const reviews = [
    {
        id: 1,
        name: "Rohit Negi",
        img: "image/pn.jpg",
        text: "The Himalayan Bites has genuine products and best Quality",
    }, {

        id: 2,
        name: "Rahul Negi",
        img: "image/pn1.jpg",
        text: "Pahad se door Pahad ka Khana Khilane ke liye Dhanyabad Team Himalayan Bites  ",
    }, {

        id: 3,
        name: "Puran Singh Negi",
        img: "image/puranBhaiya.png",
        text: "Best Food I ever Had so far in my life  but Namak ni cha Sabji ma ",
    }, {

        id: 4,
        name: "Rakesh Negi",
        img: "image/rakeshnegi.png",
        text: " Pahad ke Khane ka Swad pahad ke logo ke hatho se hi ata hai aur Muhje jaan ker acha laga ki Himalayan Bites me cook Hamare Pahadi Bhai hai ",
    }, {

        id: 5,
        name: "Rahul Sharma",
        img: "image/pn4.jpg",
        text: " Sabse Sasta Sabse Acha The Himalayan Bites",
    }, {

        id: 6,
        name: "Vikrant Singh",
        img: "image/VikrantSingh.png",
        text: "I am from Himachal but I love Uttrakhandi Food Great work from Team Himalayan Bites",
    }
];

var count = 0;
const img = document.getElementById("img");
console.log(reviews[2].img)


function forward() {

    if (count < 5) {
        count = count + 1;
        document.getElementById("img").setAttribute("src", reviews[count].img);
        document.getElementById("name").innerHTML = reviews[count].name;
        document.getElementById("text").innerHTML = reviews[count].text;
        console.log(count);
    }
    else {
        count = 0;
        document.getElementById("img").setAttribute("src", reviews[count].img);
        document.getElementById("name").innerHTML = reviews[count].name;
        document.getElementById("text").innerHTML = reviews[count].text;
        console.log(count);
    }
}

function backward() {
    if (count > 0) {
        count = count - 1;
        document.getElementById("img").setAttribute("src", reviews[count].img);
        document.getElementById("name").innerHTML = reviews[count].name;
        document.getElementById("text").innerHTML = reviews[count].text;
        console.log(count);
    }
    else {
        count = 5;
        document.getElementById("name").innerHTML = reviews[count].name;
        document.getElementById("text").innerHTML = reviews[count].text;
        console.log(count);

    }
}

console.log(count);

                                  