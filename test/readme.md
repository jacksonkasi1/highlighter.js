for me make a highlight component using typescript in react ts.

---

i will use like this,

EX:-

// # App.ts

import highlight, { Highlighter } from "highlighter";

import SamplePage from "./samplePage";

function App() {
  return (
    <>
      <div>
        <Highlighter color="green" size="20px"  show='Puff' />
      </div>
      <SamplePage />
    </>
  );
}

// --------

//  # samplePage.tsx

import highlight from "highlighter";

function SamplePage() {
  const handleClick = () => {
    highlight(["my-hello", "customer"], { color: "red", size: "24px" });
  };

  return (
    <>
      <div id="my-hello">hello</div>
      <div id="customer">
        <h1>
        the customer site
        </h1>
        </div>
      <button>Click Me</button>
    </>
  );
}

--------

but if i click any one place or if move from this page to other page this highlight will now show! but if i again click the button to trigger highlight it will show again.


----

but one main thing, if it's enable hilighting, using this npm `react-loader-spinner` it will show the

```tsx
import { Puff } from  'react-loader-spinner'


<Puff
  height="80"
  width="80"
  color="#4fa94d"
/>
```

Puff is default component to highlight on the Element. but if user wan to change other one what are option avilable in react-loader-spinner here can change via `show` prop.


--------------

how mean, it can be:

Radio
Audio
BallTriangle
Bars
Blocks
CirclesWithBar
Circles
ColorRing
Comment
Discuss
DNA
FallingLines
FidgetSpinner
Grid
Hearts
Hourglass
InfinitySpin
LineWave
MagnifyingGlass
MutatingDots
Oval
ProgressBar
Puff
RevolvingDot
Rings
RotatingLines
RotatingSquare
RotatingTriangles
TailSpin
ThreeCircles
ThreeDots
Triangle
Vortex
Watch

what i can able to import from react-loader-spinner,
ex:
import { Puff } from "react-loader-spinner";


--------

actucaly i need to show this `react-loader-spinner` upon the id element. not replace.

show upon the elemenet of top right side

---

and         <Highlighter color="green" size="20px" show="Puff" /> it's just configure. this is no need to show Highlighter.

i mean i like to clear my component like this npm. i am try to copy cat that style of using npm or component

import toast, { Toaster } from 'react-hot-toast';