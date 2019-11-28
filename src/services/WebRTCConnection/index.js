const servers = {
  iceServers: [
    { urls: process.env.REACT_APP_STUN_MOZZILA_URL },
    { urls: process.env.REACT_APP_STUN_GOOGLE_URL },
    {
      urls: process.env.REACT_APP_TURN_URL,
      credential: process.env.REACT_APP_TURN_CREDENTIAL,
      username: process.env.REACT_APP_TURN_USERNAME,
    },
  ],
};

const pc = new RTCPeerConnection(servers);

export default pc;
