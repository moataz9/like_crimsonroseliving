import { gsap } from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import scrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(scrollTrigger, CSSRulePlugin)

export default defineNuxtPlugin(() => {
  let tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2 } })

  const getPesudoEl = (el: string) => CSSRulePlugin.getRule(el)

  return {
    provide: {
      use_gsap: {
        gsap,
        tl,
        getPesudoEl,
        scrollTrigger,
      },
    },
  }
})
