const Master = () => {
    return (
        <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 576 512">
            <path
                fill="currentColor"
                d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7c-6.8 0-11.2-5.2-11.2-11.7c0-6.5 4.4-11.7 11.2-11.7c6.6 0 11.2 5.2 11.2 11.7m-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7c0 6.5 4.1 11.7 11.2 11.7c6.5 0 10.9-4.9 10.9-11.7c-.1-6.5-4.4-11.7-10.9-11.7m117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7m107.8.3c-6.8 0-10.9 5.2-10.9 11.7c0 6.5 4.1 11.7 10.9 11.7c6.8 0 11.2-4.9 11.2-11.7c0-6.5-4.4-11.7-11.2-11.7m105.9 26.1c0 .3.3.5.3 1.1c0 .3-.3.5-.3 1.1c-.3.3-.3.5-.5.8c-.3.3-.5.5-1.1.5c-.3.3-.5.3-1.1.3c-.3 0-.5 0-1.1-.3c-.3 0-.5-.3-.8-.5c-.3-.3-.5-.5-.5-.8c-.3-.5-.3-.8-.3-1.1c0-.5 0-.8.3-1.1c0-.5.3-.8.5-1.1c.3-.3.5-.3.8-.5c.5-.3.8-.3 1.1-.3c.5 0 .8 0 1.1.3c.5.3.8.3 1.1.5s.2.6.5 1.1m-2.2 1.4c.5 0 .5-.3.8-.3c.3-.3.3-.5.3-.8c0-.3 0-.5-.3-.8c-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48M64 220.6c0 76.5 62.1 138.5 138.5 138.5c27.2 0 53.9-8.2 76.5-23.1c-72.9-59.3-72.4-171.2 0-230.5c-22.6-15-49.3-23.1-76.5-23.1c-76.4-.1-138.5 62-138.5 138.2m224 108.8c70.5-55 70.2-162.2 0-217.5c-70.2 55.3-70.5 162.6 0 217.5m-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7c-4.6 0-9.5 1.4-12.8 6.5c-2.4-4.1-6.5-6.5-12.2-6.5c-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2c10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2c10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4c-10.3 0-18.2 8.2-18.2 19.3c0 11.2 7.9 19.3 18.2 19.3c5.2 0 9-1.9 11.7-5.4v4.6h7.9zm40.5 25.6c0-15-22.9-8.2-22.9-15.2c0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2c0 14.3 22.9 8.3 22.9 15c0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5m35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9m13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6c-10.6 0-18.2 7.9-18.2 19.3c0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9m59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15c0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6m66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9c0 19.2 22.4 24.7 29.9 13.9v4.6h8.2zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9c0 19.4 22.5 24.6 29.9 13.9v4.6h7.9zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8zm6.6 123.8c0-.5 0-1.1-.3-1.6c-.3-.3-.5-.8-.8-1.1c-.3-.3-.8-.5-1.1-.8c-.5 0-1.1-.3-1.6-.3c-.3 0-.8.3-1.4.3c-.5.3-.8.5-1.1.8c-.5.3-.8.8-.8 1.1c-.3.5-.3 1.1-.3 1.6c0 .3 0 .8.3 1.4c0 .3.3.8.8 1.1c.3.3.5.5 1.1.8c.5.3 1.1.3 1.4.3c.5 0 1.1 0 1.6-.3c.3-.3.8-.5 1.1-.8c.3-.3.5-.8.8-1.1c.3-.6.3-1.1.3-1.4m3.2-124.7h-1.4l-1.6 3.5l-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3c-27.2 0-53.9 8.2-76.5 23.1c72.1 59.3 73.2 171.5 0 230.5c22.6 15 49.5 23.1 76.5 23.1c76.4.1 138.5-61.9 138.5-138.4" />
        </svg>
    );
};

export default Master;