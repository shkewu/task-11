function Card(props) {
  const {img1, img2, text, title, number, score} = props;

  const $card = document.createElement("div");
  $card.classList.add("card");

  if (typeof text === "string") {
    const $textWrapper = document.createElement("div");
    $textWrapper.classList.add("text-wrapper");

    const cardText = document.createElement("p");
    cardText.textContent = text;

    $textWrapper.appendChild(cardText);
    $card.appendChild($textWrapper);
  }

  if (!!img1) {
    const $imgWrapper = document.createElement("div");
    $imgWrapper.classList.add("img-wrapper");

    const cardImg1 = document.createElement("img");
    cardImg1.src = `${img2}`;
    cardImg1.alt = "card-img";

    $imgWrapper.appendChild(cardImg1);
    $card.appendChild($imgWrapper);
  }

  if (!!title) {
    const $titleWrapper = document.createElement("div");
    $titleWrapper.classList.add("title-wrapper");
    const cardTitle = document.createElement("p");
    title.textContent = `${title}`;

    $titleWrapper.appendChild(cardTitle);
    $card.appendChild($titleWrapper);
  }

  if (!!img2) {
    const $imgWrapper2 = document.createElement("div");
    $imgWrapper2.classList.add("img-wrapper2");
    const cardImg2 = document.createElement("img");
    cardImg2.src = `${img2}`;
    cardImg2.alt = "card-img";

    $imgWrapper2.appendChild(cardImg2);
    $card.appendChild($imgWrapper2);
  }

  if (typeof number === "number") {
    const $numberWrapper = document.createElement("div");
    $numberWrapper.classList.add("number-wrapper");
    const cardNumber = document.createElement("p");
    cardNumber.textContent = `${number}`;

    $numberWrapper.appendChild(cardNumber);
    $card.appendChild($numberWrapper);
  }

  if (typeof score === "number") {
    const $scoreWrapper = document.createElement("div");
    $scoreWrapper.classList.add("score-wrapper");
    const cardScore = document.createElement("p");
    cardScore.textContent = `${score}`;

    $scoreWrapper.appendChild(cardScore);
    $card.appendChild($scoreWrapper);
  }

  return $card;
}

export {Card};
