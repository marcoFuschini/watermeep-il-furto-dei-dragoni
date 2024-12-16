import remarkGfm from "remark-gfm"
import smartypants from "remark-smartypants"
import { QuartzTransformerPlugin } from "../types"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

export interface Options {
}

const defaultOptions: Options = {
}

const HIDE_TOKEN = "`quartz-hide`";
const SHOW_TOKEN = "`quartz-show`";

export const QuartzHide: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
    const opts = { ...defaultOptions, ...userOpts }
    return {
        name: "QuartzHide",
        textTransform: (ctx, src) => {
            if (typeof (src) === 'string') {
                let cleanedSrc = src;
                const firstHideTokenIndexFound = src.indexOf(HIDE_TOKEN);
                if (firstHideTokenIndexFound > -1) {
                    cleanedSrc = '';
                    const splittedSrc = src.split(HIDE_TOKEN);
                    cleanedSrc += splittedSrc[0];
                    for (let hideSplittedIndex = 1; hideSplittedIndex < splittedSrc.length; hideSplittedIndex++) {
                        //Check if there is a show token
                        const showTokenIndex = splittedSrc[hideSplittedIndex].indexOf(SHOW_TOKEN);
                        if (showTokenIndex > -1) {
                            cleanedSrc += splittedSrc[hideSplittedIndex].substring(showTokenIndex + SHOW_TOKEN.length);
                        }
                    }
                }
                return cleanedSrc.replaceAll(HIDE_TOKEN, "").replaceAll(SHOW_TOKEN, "");
            }
            return src;
        },
    }
}
