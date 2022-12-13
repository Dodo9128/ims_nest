export const createVenueSuccessResult = {
  result: {
    type: "string",
    description: "result",
    example: "ok",
  },
  message: {
    type: "string",
    description: "message",
    example: "new venue add",
  },
  data: {
    type: "object",
    description: "data",
    example: {
      id: 1,
      name: "TEST_VENUE_1",
      description: "TEST_VENUE_DESCRIPTION",
      updatedAt: "2022-11-23T09:33:17.554Z",
      registeredAt: "2022-11-23T09:33:17.554Z",
      systems: "[]",
    },
  },
};

export const createVenueFailResult = {
  result: {
    type: "string",
    description: "result",
    example: "fail",
  },
  message: {
    type: "string",
    description: "message",
    example: "new venue add fail",
  },
  data: {
    type: null,
    description: "data",
    example: null,
  },
};

export const findAllVenueSuccessResult = {
  result: {
    type: "string",
    description: "result",
    example: "ok",
  },
  message: {
    type: "string",
    description: "message",
    example: "return whole venue info",
  },
  data: {
    type: "array",
    description: "data",
    example: [
      {
        id: 1,
        name: "test1",
        description: "testmaking",
        updatedAt: "2022-11-23T09:33:17.554Z",
        registeredAt: "2022-11-23T09:33:17.554Z",
        systems: "[]",
      },
      {
        id: 2,
        name: "test2",
        description: "testmaking2",
        updatedAt: "2022-11-23T09:33:17.554Z",
        registeredAt: "2022-11-23T09:33:17.554Z",
        systems: "[1]",
      },
    ],
  },
};

export const findAllVenueFailResult = {
  result: {
    type: "string",
    description: "result",
    example: "fail",
  },
  message: {
    type: "string",
    description: "message",
    example: "return whole venue info fail",
  },
  data: {
    type: null,
    description: "data",
    example: null,
  },
};

export const findOneVenueSuccessResult = {
  result: {
    type: "string",
    description: "result",
    example: "ok",
  },
  message: {
    type: "string",
    description: "message",
    example: "venue info",
  },
  data: {
    type: "object",
    description: "data",
    example: {
      id: 1,
      name: "TEST_VENUE_1",
      description: "TEST_VENUE_DESCRIPTION",
      updatedAt: "2022-11-23T09:33:17.554Z",
      registeredAt: "2022-11-23T09:33:17.554Z",
      systems: "[]",
    },
  },
};

export const findOneVenueFailResult = {
  result: {
    type: "string",
    description: "result",
    example: "fail",
  },
  message: {
    type: "string",
    description: "message",
    example: "there is no venue info",
  },
  data: {
    type: null,
    description: "data",
    example: null,
  },
};

export const updateVenueSuccessResult = {
  result: {
    type: "string",
    description: "result",
    example: "ok",
  },
  message: {
    type: "string",
    description: "message",
    example: "venue update success, ID: 1",
  },
  data: {
    type: "object",
    description: "data",
    example: {
      id: 1,
      name: "TEST_VENUE_1",
      description: "TEST_VENUE_DESCRIPTION",
      updatedAt: "2022-11-23T09:33:17.554Z",
      registeredAt: "2022-11-23T09:33:17.554Z",
      systems: "[]",
    },
  },
};

export const updateVenueFailResult = {
  result: {
    type: "string",
    description: "result",
    example: "fail",
  },
  message: {
    type: "string",
    description: "message",
    example: "venue update fail, ID: 1",
  },
  data: {
    type: null,
    description: "data",
    example: null,
  },
};

export const deleteVenueSuccessResult = {
  result: {
    type: "string",
    description: "result",
    example: "ok",
  },
  message: {
    type: "string",
    description: "message",
    example: "venue delete success, ID: 1",
  },
  data: {
    type: "object",
    description: "data",
    example: {
      id: 1,
      name: "TEST_VENUE_1",
      description: "TEST_VENUE_DESCRIPTION",
      updatedAt: "2022-11-23T09:33:17.554Z",
      registeredAt: "2022-11-23T09:33:17.554Z",
      systems: "[]",
    },
  },
};

export const deleteVenueFailResult = {
  result: {
    type: "string",
    description: "result",
    example: "fail",
  },
  message: {
    type: "string",
    description: "message",
    example: "venue delete fail, ID: 1",
  },
  data: {
    type: null,
    description: "data",
    example: null,
  },
};
