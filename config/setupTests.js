/* eslint-disable @typescript-eslint/no-var-requires */
require('jest-fetch-mock').enableMocks()

global.navigator = {};

/* eslint-disable no-undef */
global.URL.createObjectURL = jest.fn();

global.navigator.geolocation = {
  getCurrentPosition: jest.fn()
    .mockImplementationOnce((success) => Promise.resolve(success({
      coords: {
        latitude: 51.1,
        longitude: 45.3
      }
    }))),
  watchPosition: jest.fn()
};

HTMLCanvasElement.prototype.getContext = () => {/** */ };
