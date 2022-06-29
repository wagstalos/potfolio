import "./style.css";

export default function Share() {
  const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: "Wagner Silva",
          url: document.location.href,
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong sharing the blog", error);
        });
    }
  };
  return (
    <>
      <button className="btn-share" onClick={handleOnClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-share"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#08b9bb"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
          <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
        </svg>
      </button>
    </>
  );
}
