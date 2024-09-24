
type Poi = {
    id: number;
    key: string;
    location: google.maps.LatLngLiteral;
    type: "Office" | "other";
    projectType:
      | "Refurbished wind turbines"
      | "New wind turbines secondary market"
      | 'Used wind turbines "as is"'
      | "Repowerlab";
    projectDesc: "Projects implemented by Repowerlab staff" | string;
  };

  export const locations: Poi[] = [
    {
      id: 1,
      key: "Sweden",
      location: { lat: 63.025971, lng: 16.214388 },
      type: "other",
      projectType: "New wind turbines secondary market",
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 2,
      key: "Poland",
      location: {
        lat: 53.46285,
        lng: 18.184682,
      },
      type: "other",
      projectType: "New wind turbines secondary market",
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 3,
      key: "Scotland",
      location: { lat: 57.985997, lng: -4.831163 },
      type: "other",
      projectType: 'Used wind turbines "as is"',
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 4,
      key: "Ireland",
      location: {
        lat: 53.582606,
        lng: -7.798127,
      },
      type: "other",
      projectType: 'Used wind turbines "as is"',
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 5,
      key: "United Kingdom",
      location: { lat: 52.813761, lng: -0.278399 },
      type: "other",
      projectType: "Refurbished wind turbines",
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 6,
      key: "Spain",
      location: { lat: 40.7904513, lng: -2.9853098 },
      type: "Office",
      projectType: "Repowerlab",
      projectDesc: "Balcon 98, 19192 Trijueque, Guadalajara, España",
    },
    {
      id: 7,
      key: "Spain",
      location: {
        lat: 38.064223,
        lng: -3.602397,
      },
      type: "other",
      projectType: "Refurbished wind turbines",
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 8,
      key: "France",
      location: { lat: 44.420935, lng: 3.895735 },
      type: "other",
      projectType: "New wind turbines secondary market",
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 9,
      key: "Italy",
      location: { lat: 43.939791, lng: 10.91641 },
      type: "other",
      projectType: 'Used wind turbines "as is"',
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 10,
      key: "Italy",
      location: { lat: 40.571418, lng: 17.266168 },
      type: "other",
      projectType: 'Used wind turbines "as is"',
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 11,
      key: "Greece",
      location: { lat: 40.068682, lng: 21.464399 },
      type: "other",
      projectType: "New wind turbines secondary market",
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 12,
      key: "Turkey",
      location: { lat: 39.175314, lng: 27.383441 },
      type: "other",
      projectType: 'Used wind turbines "as is"',
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 13,
      key: "Usa",
      location: { lat: 38.8886088, lng: -77.0923757 },
      type: "Office",
      projectType: "Repowerlab",
      projectDesc: "2623 Fairfax Drive, Arlington, VA 22201",
    },
    {
      id: 14,
      key: "Nicaragua",
      location: {
        lat: 12.251737,
        lng: -85.256947,
      },
      type: "other",
      projectType: "Refurbished wind turbines",
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 15,
      key: "Colombia",
      location: { lat: 3.4556803, lng: -76.5391023 },
      type: "Office",
      projectType: "Repowerlab",
      projectDesc: "Calle 45 No. 45-45, Bogotá, Colombia",
    },
    {
      id: 16,
      key: "Colombia",
      location: {
        lat: 0.976313,
        lng: -72.252799,
      },
      type: "other",
      projectType: "New wind turbines secondary market",
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 17,
      key: "Chile",
      location: { lat: -25.636961, lng: -69.562981 },
      type: "other",
      projectType: "Refurbished wind turbines",
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 18,
      key: "Chile",
      location: { lat: -39.631439, lng: -72.461204 },
      type: "other",
      projectType: 'Used wind turbines "as is"',
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 19,
      key: "Argentina",
      location: { lat: -36.100152, lng: -62.393221 },
      type: "other",
      projectType: 'Used wind turbines "as is"',
      projectDesc: "Projects implemented by Repowerlab staff",
    },
    {
      id: 20,
      key: "Kenya",
      location: { lat: -0.135818, lng: 39.182963 },
      type: "other",
      projectType: 'Used wind turbines "as is"',
      projectDesc: "Projects implemented by Repowerlab staff",
    },
  ];