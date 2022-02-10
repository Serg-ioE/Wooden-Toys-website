var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}
// Carousel JS from W3schools/

var infoArray = [
  "Beautifully handcrafted wooden car. One-of-a-kind - (the photos included for this item may not be the actual car that you will receive. All cars are the same size and construction). Great toy that will inspire imaginative and active play. This car will be in your family for generations to come - think heirloom or keepsake. Handcrafted from a variety of domestic and exotic hardwoods including maple, oak, mahogany, cherry woods, etc., coated with clear lacquer to enhance and hold the natural wood color. All edges are rounded over and sanded for a silky smooth finish. Please be aware there may be choking hazards with small children. Toys have a few small parts that may break with excessive rough or improper use.",
  "Wooden Airplane Toy. Defying gravity and soaring in the sky is every boys dream. Keep him dreaming big with this classic wooden airplane made by us, here at Little Bird Toys in Bound Brook, NJ. The airplane comes ready to fly with a kid-safe Natural Harvest Finish and a propeller that spins. The dimensions of the Airplane is approximately 3.5H x 7L x 7W . The Airplane Comes with Real Rolling Wheels and Spinning Propellers. Made out of Solid Wood - Built to Last for a Lifetime of Play. Perfect Creative Gift for Toddlers. Safe for Young Kids - Comes with a Non-Toxic Finish!",
  "A beautiful handmade wooden train set - Engine and three interchangeable cars Handmade detailed artwork made of real beech wood. Wonderful Christmas gift! Large size - 84 cm length, 11 height and 13 width Moving wheel mechanism. Fully ecological product, only natural materials. High quality and durable. Suitable for children from 3 years old Lots of fun guaranteed at any age! This set can be painted using wood paint. Theses toys are #timeless and can be passed down for generations to come. Please note that these toys have small parts that could break off if used inappropriately.",
  "On the coast of Maine, Lobstah boats like this one are a common sight. This new wooden toy model really floats and makes a great bath toy. The safe and simple design encourages a child to use his or her own imagination. Batteries not required! Handcrafted in Maine with soft and rounded corners and edges to nourish a child`s senses and to be safe for toddlers. Built of solid Maine white pine and sturdy enough to withstand years of use before being passed down to the next generation. Boat comes with two peg lobster- people. SIZE : 10.5W x 3.5H MATERIAL : Solid White Pine",
  "High-Grade Quality: Hardwood blocks are sturdy, solid and safe for kids. 72 naturally finished and smooth-sanded hardwood blocks. Case size is 13” L x 12” W x 2” H. Packaged in a handsome, wooden storage crate for easy storage. Suitable for children ages 3 and up. Highly durable set for indoor or outdoor use including: lawns, patios, living rooms, preschools, kindergartens & anywhere else. Make your own dream castle anywhere.  Block play helps promote creativity, independent play, cooperative play, fine motor skills and hand-eye coordination. When building, children must consider proportions, symmetry, size and more, which benefit early cultivation of concepts. This product is conducive to your child`s imagination, allowing various kinds of combinations to be built"
];

function changeProductInfoAdv() {
  slideIndex++;
  if (slideIndex > infoArray.length - 1) {
    slideIndex = 0;
  }
  document.getElementById("productInfo").innerHTML = infoArray[slideIndex];
}

function changeProductInfoNeg() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = [infoArray.length - 1];
  }
  document.getElementById("productInfo").innerHTML = infoArray[slideIndex];
}

function myFunction(x) {
  x.style.background = "#FF3308";
}
//W3schools on Focus Orange


