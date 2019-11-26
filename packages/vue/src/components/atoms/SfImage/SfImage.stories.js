// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

import SfImage from "./SfImage.vue";

storiesOf("Atoms|Image", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfImage },
    props: {
      src: {
        default: object("src (prop)", {
          small: {
            url: "/assets/storybook/product-109x164.jpg",
            alt: "Vila stripe maxi shirt dress"
          },
          normal: {
            url: "/assets/storybook/product-216x326.jpg",
            alt: "Vila stripe maxi shirt dress"
          }
        })
      },
      alt: {
        default: text("alt (prop)", "Vila stripe maxi shirt dress")
      },
      placeholder: {
        default: text("placeholder (prop)", "/assets/placeholder.png")
      },
      transition: {
        default: text("transition (prop)", "fade")
      },
      lazy: {
        default: boolean("lazy (prop)", true)
      },
      width: {
        default: number("Picture width(prop)", 216)
      },
      height: {
        default: number("Picture height(prop)", 326)
      },
      pictureBreakpoint: {
        default: number("pictureBreakpoint (prop)", 576)
      }
    },
    template: `<SfImage
        :src="src"
        :alt="alt"
        :transition="transition"
        :lazy="lazy"
        :width="width"
        :height="height"
        :placeholder="placeholder"
        :picture-breakpoint="pictureBreakpoint" />`
  }))
  .add("[slot] default", () => ({
    components: { SfImage },
    props: {
      src: {
        default: object("src (prop)", {
          small: {
            url: "/assets/storybook/product-109x164.jpg"
          },
          normal: {
            url: "/assets/storybook/product-216x326.jpg"
          }
        })
      },
      alt: {
        default: text("alt (prop)", "Vila stripe maxi shirt dress")
      },
      placeholder: {
        default: text("placeholder (prop)", "/assets/placeholder.png")
      },
      transition: {
        default: text("transition (prop)", "fade")
      },
      lazy: {
        default: boolean("lazy (prop)", true)
      },
      height: {
        default: number("Picture width(prop)", 216)
      },
      width: {
        default: number("Picture height(prop)", 326)
      },
      pictureBreakpoint: {
        default: number("picture-breakpoint (prop)", 576)
      }
    },
    template: `<SfImage
      :src="src"
      :alt="alt"
      :transition="transition"
      :lazy="lazy"
      :placeholder="placeholder"
      :width="width"
      :height="height"
      :picture-breakpoint="pictureBreakpoint">
      <span>angelina_trn</span>
    </SfImage>`
  }));
