export default function Whatsapp() {
  return (
    <div className="btn-whats">
      <a href="https://api.whatsapp.com/send?l=pt_BR&phone=5511999488027" title="whatsapp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-whatsapp"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ddf0f0"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
          <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
        </svg>
      </a>
    </div>
  );
}
