/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import Item from "./Item";

const Content = () => {
  return (
    <div css={style} className="content">
      <Item
        src="https://images-na.ssl-images-amazon.com/images/I/71DYmqoq-VL._SL1024_.jpg"
        alt="tomato"
        title="Tomato"
        des="The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived."
        even={false}
      />
      <Item
        src="https://pngimage.net/wp-content/uploads/2018/05/egg-white-png.png"
        alt="egg"
        title="Egg"
        des="An egg is the organic vessel containing the zygote in which an embryo develops until it can survive on its own, at which point the animal hatches. An egg results from fertilization of an egg cell. Most arthropods, vertebrates (excluding live-bearing mammals), and mollusks lay eggs, although some, such as scorpions, do not."
        even={true}
      />
      <Item
        src="https://lh3.googleusercontent.com/proxy/0aOY0ZC0R1e_eN5gv2FpGzMY88UQ52TjmTHGpAi4RHjPHAjqcGYZVUSC69IpmjiaFuGLEL9fApSHn918cR1oI1mBYnx6_AOMjl5vQ6ZEtl51Gaa5RzXFh4QPksC0Z1r9io6KMLqry7HOSfj_8nPerU1Zh6Y2_fo7NgnBSDf2bLU4o6WyPkT2zDzTtne1N0ZvFS_mD40foLRuw9bBvhLOhcCrgb7_wVQ3NEZcTY_A7LuG6JqjlUvg78FpDhHHKMRdqgj_Xs_pJ0q0xuCGLwAs"
        alt="basil"
        title="Basil"
        des="Basil is native to tropical regions from central Africa to Southeast Asia. It is a tender plant, and is used in cuisines worldwide. Depending on the species and cultivar, the leaves may taste somewhat like anise, with a strong, pungent, often sweet smell."
        even={false}
      />
      <Item
        src="https://media.gettyimages.com/photos/raw-pasta-spaghetti-macaroni-isolated-on-white-background-picture-id1063398414"
        alt="spaghetti"
        title="Spaghetti"
        des="Spaghetti (Italian: [spaˈɡetti]) is a long, thin, solid, cylindrical pasta.[1] It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals."
        even={true}
      />
    </div>
  );
};

const style = css`
  margin: 0 20%;
`;

export default Content;
