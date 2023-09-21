# Welcome to Cozzzy Cafe! ☕
#### Video Demo: https://youtu.be/IXk2807FTf4
#### Play Here: https://marsbarnes.github.io/Cozzzy-Cafe/
#### To Run: start a static http server (like [serve](https://npm.im/serve)) and go to index.html

## Overview
Embrace your inner barista in my delightfully engaging and visually stunning pixel-art game, Cozzzy Cafe. This immersive cafe simulation is an elegantly coded masterpiece, built to serve you a refreshing blend of entertainment and nostalgia.

In Cozzzy Cafe, players step into the comfortable shoes of a barista, dutifully serving up water, tea, or coffee to customers. Each customer's order is conveniently displayed in a speech bubble, featuring an image of their desired refreshment. It's your job to decipher these visual hints, swiftly and correctly prepare the order, and serve it with a pixel-art smile. Each successful order fulfillment rewards you with virtual currency, adding an exciting element of progression to the gameplay.

Cozzzy Cafe boasts a rich history in its development journey. The game began its life in the simple, yet powerful, Scratch programming environment before evolving further. Leveraging the versatile leopard.js library, the original Scratch project was transformed into a robust JavaScript application. As the game transitioned beyond Scratch's capabilities, additional features were meticulously incorporated, elevating the gameplay to new heights of enjoyment.

The visual charm of Cozzzy Cafe lies in its original pixel art, painstakingly handcrafted by the creator. Each sprite, backdrop, and in-game item was designed with meticulous attention to detail, immersing players in a vibrant and captivating pixelated world. The water, tea, and coffee all have pour animations digitally drawn frame-by-frame.

Published on GitHub Pages, Cozzzy Cafe is just a click away from your next gaming adventure. As for the controls, they are incredibly intuitive. Navigate your barista left with the 'A' key, and right with the 'D' key. The 'S' key allows you to pick up items, while the space bar is reserved for pouring out that perfect cup of customer satisfaction.

Dive in, brew up some fun, and get ready to run the coziest cafe in the pixel universe! Cozzzy Cafe is a testament to the art of game development, a celebration of creativity, and above all, an invitation to have a fantastic time. Enjoy your stay at Czozzy Cafe!


## Overcoming Limitations: A Leap from Scratch to JavaScript

One of the key challenges encountered during the early development of Cozzzy Cafe was the limitations of the Scratch language concerning sprite layering. While Scratch provides some control over sprite layering—such as sending objects to the front or back and up or down one layer—it does not support absolute positioning of sprites within layers.

As the gameplay of Cozzzy Cafe evolved and more sprites were added, this limitation became increasingly significant. It was clear that to fully realize the vision for Cozzzy Cafe, a transition out of Scratch and into JavaScript was necessary.

The shift to JavaScript opened up a new world of possibilities, including the capability to assign specific layer numbers to each sprite. This feature determines the order in which sprites are loaded onto the page, enabling absolute control over sprite layering.

Delving into the source code of the leopard.js library, I was able to understand precisely how these layer numbers were processed. This knowledge was instrumental in orchestrating the perfect overlap of in-game objects, ensuring the visual integrity of Cozzzy Cafe.

This journey from Scratch to JavaScript was not just a technical transition, but a transformative experience in overcoming limitations and unlocking new potentials. It underscores the importance of choosing the right tools for game development, and how embracing new technologies can lead to more robust and sophisticated gameplay.


## Development Journey

Throughout the creation of Cozzzy Cafe, numerous decisions were made to enhance the player experience and ensure the game was both engaging and responsive.

One such decision involved the switch from mouse clicks to keyboard inputs for object interaction. The early version of Cozzzy Cafe utilized mouse clicks for object selection. However, the use of the 'A', 'S', 'D', and space keys was found to significantly improve the game's feel. The tactile sensation and swift response of a key press lend a more satisfying and snappy feeling to the gameplay.

This choice, while beneficial, required additional coding to ensure smooth gameplay. Defining the range within which items could be picked up posed a challenge. Initially, players could pick up more than one object at a time, resulting in a bug.

To counter this, a JavaScript function was crafted to ensure that only the item closest to the player would be picked up when multiple items were within range. This neat solution added a layer of strategic gameplay and resolved the aforementioned bug, enhancing the overall player experience.

Furthermore, this shift to keyboard interaction also necessitated a rearrangement of in-game items. Originally, some objects were arranged vertically. To accommodate the 'S' key's functionality, these items were repositioned horizontally. This adaptation not only improved the game's logic but also contributed to its visual appeal and intuitive design.

The evolution of Cozzzy Cafe serves as a testament to the continuous iteration and problem-solving inherent in game development. It is a celebration of creativity, adaptability, and technical skill.
