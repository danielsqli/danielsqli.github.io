export const text1 = `
We created this app as a fun project to learn about building neural networks and mobile apps, not to make the most accurate flower identification tool.
Therefore, this app is not intended to be used as a definitive source of flower identification.`;

export const text2 = `
FlowerID uses a convolutional neural network made with Tensorflow and Keras.
We decided to create the model architecture from scratch instead of retraining existing networks, such as MobileNet, since we wanted to learn about building the network ourselves.
We used this dataset: https://www.kaggle.com/alxmamaev/flowers-recognition, which has labeled images of 5 flower types: daisies, dandelions, roses, sunflowers, and tulips.
This is why our app currently only supports these flower types.`;

export const text3 = `
Due to the constraints of training the model on a laptop, the size of our input tensors are set to 200x200 (400x400 caused memory issues, and if we turned the batch size too low it would take hours to train even a dozen epochs).
This definitely affects the accuracy of FlowerID, but we avoided using cloud services for our first machine learning project as we wanted to see how everything works out locally.
Later on used Google Cloud to train a model for another project that we did after this one.`;

export const text4 = `
The FlowerID Android app was built with React Native (and a bit of Expo) with the help of Tensorflow JS.
The initial release used Javascript, but we switched to using Typescript, along with functional components instead of classes;`;

export const githubs = `
My GitHubs: https://github.com/danielsqli`;
