import { SlideArrow } from "./Slide-Arrow";
import { TabsSlide } from "./Tabs-Slide";

export function TabsBar() {
  return (
    <div id="tabs-bar">
      <SlideArrow direction="left" />
      <TabsSlide/>
      <SlideArrow direction="right" />
    </div>
  );
}
