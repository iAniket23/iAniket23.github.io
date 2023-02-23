import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, h as detach, n as attr, b as insert_hydration, D as append_hydration, E as listen, C as noop, F as run_all, G as create_slot, x as create_component, y as claim_component, z as mount_component, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-eaf68d30.js";
const global = "";
const nav_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let main;
  let nav;
  let input;
  let t0;
  let label;
  let t1;
  let t2;
  let div;
  let a0;
  let t3;
  let t4;
  let a1;
  let t5;
  let t6;
  let a2;
  let t7;
  let t8;
  let a3;
  let t9;
  let t10;
  let a4;
  let t11;
  let t12;
  let a5;
  let t13;
  let t14;
  let a6;
  let t15;
  let mounted;
  let dispose;
  return {
    c() {
      main = element("main");
      nav = element("nav");
      input = element("input");
      t0 = space();
      label = element("label");
      t1 = text("☰");
      t2 = space();
      div = element("div");
      a0 = element("a");
      t3 = text("Home");
      t4 = space();
      a1 = element("a");
      t5 = text("About");
      t6 = space();
      a2 = element("a");
      t7 = text("Projects");
      t8 = space();
      a3 = element("a");
      t9 = text("Contact");
      t10 = space();
      a4 = element("a");
      t11 = text("Resume");
      t12 = space();
      a5 = element("a");
      t13 = text("LinkedIn");
      t14 = space();
      a6 = element("a");
      t15 = text("Github");
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      nav = claim_element(main_nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      input = claim_element(nav_nodes, "INPUT", { type: true, id: true, class: true });
      t0 = claim_space(nav_nodes);
      label = claim_element(nav_nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      t1 = claim_text(label_nodes, "☰");
      label_nodes.forEach(detach);
      t2 = claim_space(nav_nodes);
      div = claim_element(nav_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      a0 = claim_element(div_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "Home");
      a0_nodes.forEach(detach);
      t4 = claim_space(div_nodes);
      a1 = claim_element(div_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "About");
      a1_nodes.forEach(detach);
      t6 = claim_space(div_nodes);
      a2 = claim_element(div_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t7 = claim_text(a2_nodes, "Projects");
      a2_nodes.forEach(detach);
      t8 = claim_space(div_nodes);
      a3 = claim_element(div_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      t9 = claim_text(a3_nodes, "Contact");
      a3_nodes.forEach(detach);
      t10 = claim_space(div_nodes);
      a4 = claim_element(div_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      t11 = claim_text(a4_nodes, "Resume");
      a4_nodes.forEach(detach);
      t12 = claim_space(div_nodes);
      a5 = claim_element(div_nodes, "A", { href: true, class: true });
      var a5_nodes = children(a5);
      t13 = claim_text(a5_nodes, "LinkedIn");
      a5_nodes.forEach(detach);
      t14 = claim_space(div_nodes);
      a6 = claim_element(div_nodes, "A", { href: true, class: true });
      var a6_nodes = children(a6);
      t15 = claim_text(a6_nodes, "Github");
      a6_nodes.forEach(detach);
      div_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "type", "checkbox");
      attr(input, "id", "checkbox_toggle");
      attr(input, "class", "svelte-ds9ezx");
      attr(label, "for", "checkbox_toggle");
      attr(label, "class", "hamburger svelte-ds9ezx");
      attr(a0, "href", "javascript:void(0)");
      attr(a0, "class", "svelte-ds9ezx");
      attr(a1, "href", "javascript:void(0)");
      attr(a1, "class", "svelte-ds9ezx");
      attr(a2, "href", "javascript:void(0)");
      attr(a2, "class", "svelte-ds9ezx");
      attr(a3, "href", "javascript:void(0)");
      attr(a3, "class", "svelte-ds9ezx");
      attr(a4, "href", "https://drive.google.com/file/d/1DfntPfRUI0IjXP2bnUuAsTMDysqyYOtH/view?usp=sharing");
      attr(a4, "class", "svelte-ds9ezx");
      attr(a5, "href", "https://www.linkedin.com/in/ianiket23");
      attr(a5, "class", "svelte-ds9ezx");
      attr(a6, "href", "https://github.com/iAniket23");
      attr(a6, "class", "svelte-ds9ezx");
      attr(div, "class", "nav-links svelte-ds9ezx");
      attr(nav, "class", "svelte-ds9ezx");
      attr(main, "class", "svelte-ds9ezx");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, nav);
      append_hydration(nav, input);
      append_hydration(nav, t0);
      append_hydration(nav, label);
      append_hydration(label, t1);
      append_hydration(nav, t2);
      append_hydration(nav, div);
      append_hydration(div, a0);
      append_hydration(a0, t3);
      append_hydration(div, t4);
      append_hydration(div, a1);
      append_hydration(a1, t5);
      append_hydration(div, t6);
      append_hydration(div, a2);
      append_hydration(a2, t7);
      append_hydration(div, t8);
      append_hydration(div, a3);
      append_hydration(a3, t9);
      append_hydration(div, t10);
      append_hydration(div, a4);
      append_hydration(a4, t11);
      append_hydration(div, t12);
      append_hydration(div, a5);
      append_hydration(a5, t13);
      append_hydration(div, t14);
      append_hydration(div, a6);
      append_hydration(a6, t15);
      if (!mounted) {
        dispose = [
          listen(
            a0,
            "click",
            /*click_handler*/
            ctx[0]
          ),
          listen(
            a1,
            "click",
            /*click_handler_1*/
            ctx[1]
          ),
          listen(
            a2,
            "click",
            /*click_handler_2*/
            ctx[2]
          ),
          listen(
            a3,
            "click",
            /*click_handler_3*/
            ctx[3]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(main);
      mounted = false;
      run_all(dispose);
    }
  };
}
function uncheckCheckbox() {
  var checkbox = document.getElementById("checkbox_toggle");
  checkbox.checked = false;
}
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
  uncheckCheckbox();
}
function instance$1($$self) {
  const click_handler = () => scrollToSection("home");
  const click_handler_1 = () => scrollToSection("about");
  const click_handler_2 = () => scrollToSection("projects");
  const click_handler_3 = () => scrollToSection("contact");
  return [click_handler, click_handler_1, click_handler_2, click_handler_3];
}
class Nav extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, {});
  }
}
const background_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div;
  let ul;
  let li0;
  let t0;
  let li1;
  let t1;
  let li2;
  let t2;
  let li3;
  let t3;
  let li4;
  let t4;
  let li5;
  let t5;
  let li6;
  let t6;
  let li7;
  let t7;
  let li8;
  let t8;
  let li9;
  return {
    c() {
      div = element("div");
      ul = element("ul");
      li0 = element("li");
      t0 = space();
      li1 = element("li");
      t1 = space();
      li2 = element("li");
      t2 = space();
      li3 = element("li");
      t3 = space();
      li4 = element("li");
      t4 = space();
      li5 = element("li");
      t5 = space();
      li6 = element("li");
      t6 = space();
      li7 = element("li");
      t7 = space();
      li8 = element("li");
      t8 = space();
      li9 = element("li");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      ul = claim_element(div_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", { class: true });
      children(li0).forEach(detach);
      t0 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", { class: true });
      children(li1).forEach(detach);
      t1 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", { class: true });
      children(li2).forEach(detach);
      t2 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", { class: true });
      children(li3).forEach(detach);
      t3 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", { class: true });
      children(li4).forEach(detach);
      t4 = claim_space(ul_nodes);
      li5 = claim_element(ul_nodes, "LI", { class: true });
      children(li5).forEach(detach);
      t5 = claim_space(ul_nodes);
      li6 = claim_element(ul_nodes, "LI", { class: true });
      children(li6).forEach(detach);
      t6 = claim_space(ul_nodes);
      li7 = claim_element(ul_nodes, "LI", { class: true });
      children(li7).forEach(detach);
      t7 = claim_space(ul_nodes);
      li8 = claim_element(ul_nodes, "LI", { class: true });
      children(li8).forEach(detach);
      t8 = claim_space(ul_nodes);
      li9 = claim_element(ul_nodes, "LI", { class: true });
      children(li9).forEach(detach);
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li0, "class", "svelte-jsuvft");
      attr(li1, "class", "svelte-jsuvft");
      attr(li2, "class", "svelte-jsuvft");
      attr(li3, "class", "svelte-jsuvft");
      attr(li4, "class", "svelte-jsuvft");
      attr(li5, "class", "svelte-jsuvft");
      attr(li6, "class", "svelte-jsuvft");
      attr(li7, "class", "svelte-jsuvft");
      attr(li8, "class", "svelte-jsuvft");
      attr(li9, "class", "svelte-jsuvft");
      attr(ul, "class", "circles svelte-jsuvft");
      attr(div, "class", "area svelte-jsuvft");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, ul);
      append_hydration(ul, li0);
      append_hydration(ul, t0);
      append_hydration(ul, li1);
      append_hydration(ul, t1);
      append_hydration(ul, li2);
      append_hydration(ul, t2);
      append_hydration(ul, li3);
      append_hydration(ul, t3);
      append_hydration(ul, li4);
      append_hydration(ul, t4);
      append_hydration(ul, li5);
      append_hydration(ul, t5);
      append_hydration(ul, li6);
      append_hydration(ul, t6);
      append_hydration(ul, li7);
      append_hydration(ul, t7);
      append_hydration(ul, li8);
      append_hydration(ul, t8);
      append_hydration(ul, li9);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
class Background extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const _layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let nav;
  let t0;
  let div;
  let background;
  let t1;
  let current;
  nav = new Nav({});
  background = new Background({});
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      create_component(nav.$$.fragment);
      t0 = space();
      div = element("div");
      create_component(background.$$.fragment);
      t1 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      claim_component(nav.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(background.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      attr(div, "class", "background svelte-se8gy2");
    },
    m(target, anchor) {
      mount_component(nav, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      mount_component(background, div, null);
      insert_hydration(target, t1, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(nav.$$.fragment, local);
      transition_in(background.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(nav.$$.fragment, local);
      transition_out(background.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(nav, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      destroy_component(background);
      if (detaching)
        detach(t1);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
