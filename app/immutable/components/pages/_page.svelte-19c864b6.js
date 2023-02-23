import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, C as noop, q as text, a as space, r as claim_text, c as claim_space, D as append_hydration, L as src_url_equal, p as set_style, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-eaf68d30.js";
const me_svelte_svelte_type_style_lang = "";
function create_fragment$6(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "img svelte-1ofev1t");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
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
class Me extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$6, safe_not_equal, {});
  }
}
const mainText_svelte_svelte_type_style_lang = "";
function create_fragment$5(ctx) {
  let main;
  let div;
  let h10;
  let i;
  let t0;
  let t1;
  let t2;
  let h11;
  let t3;
  let t4;
  let h12;
  let span;
  return {
    c() {
      main = element("main");
      div = element("div");
      h10 = element("h1");
      i = element("i");
      t0 = text("Hey");
      t1 = text(", I'm");
      t2 = space();
      h11 = element("h1");
      t3 = text("Aniket.");
      t4 = space();
      h12 = element("h1");
      span = element("span");
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", {});
      var main_nodes = children(main);
      div = claim_element(main_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h10 = claim_element(div_nodes, "H1", { class: true });
      var h10_nodes = children(h10);
      i = claim_element(h10_nodes, "I", { class: true });
      var i_nodes = children(i);
      t0 = claim_text(i_nodes, "Hey");
      i_nodes.forEach(detach);
      t1 = claim_text(h10_nodes, ", I'm");
      h10_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      h11 = claim_element(div_nodes, "H1", { class: true });
      var h11_nodes = children(h11);
      t3 = claim_text(h11_nodes, "Aniket.");
      h11_nodes.forEach(detach);
      t4 = claim_space(div_nodes);
      h12 = claim_element(div_nodes, "H1", {});
      var h12_nodes = children(h12);
      span = claim_element(h12_nodes, "SPAN", { id: true, class: true });
      children(span).forEach(detach);
      h12_nodes.forEach(detach);
      div_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "word svelte-15ydmde");
      attr(h10, "class", "first svelte-15ydmde");
      attr(h11, "class", "second svelte-15ydmde");
      attr(span, "id", "third");
      attr(span, "class", "svelte-15ydmde");
      attr(div, "class", "container svelte-15ydmde");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, div);
      append_hydration(div, h10);
      append_hydration(h10, i);
      append_hydration(i, t0);
      append_hydration(h10, t1);
      append_hydration(div, t2);
      append_hydration(div, h11);
      append_hydration(h11, t3);
      append_hydration(div, t4);
      append_hydration(div, h12);
      append_hydration(h12, span);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(main);
    }
  };
}
class MainText extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$5, safe_not_equal, {});
  }
}
const contact_svelte_svelte_type_style_lang = "";
function create_fragment$4(ctx) {
  let link;
  let t0;
  let main;
  let div0;
  let h10;
  let i0;
  let t1;
  let t2;
  let t3;
  let h11;
  let t4;
  let t5;
  let div1;
  let h40;
  let i1;
  let t6;
  let t7;
  let br0;
  let a0;
  let i2;
  let t8;
  let h41;
  let i3;
  let t9;
  let t10;
  let br1;
  let a1;
  let i4;
  return {
    c() {
      link = element("link");
      t0 = space();
      main = element("main");
      div0 = element("div");
      h10 = element("h1");
      i0 = element("i");
      t1 = text("Get");
      t2 = text(" in");
      t3 = space();
      h11 = element("h1");
      t4 = text("Touch");
      t5 = space();
      div1 = element("div");
      h40 = element("h4");
      i1 = element("i");
      t6 = text("Shoot");
      t7 = text(" me an email ");
      br0 = element("br");
      a0 = element("a");
      i2 = element("i");
      t8 = space();
      h41 = element("h4");
      i3 = element("i");
      t9 = text("Reach");
      t10 = text(" out to me on LinkedIn ");
      br1 = element("br");
      a1 = element("a");
      i4 = element("i");
      this.h();
    },
    l(nodes) {
      link = claim_element(nodes, "LINK", { rel: true, href: true });
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", {});
      var main_nodes = children(main);
      div0 = claim_element(main_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h10 = claim_element(div0_nodes, "H1", { class: true });
      var h10_nodes = children(h10);
      i0 = claim_element(h10_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t1 = claim_text(i0_nodes, "Get");
      i0_nodes.forEach(detach);
      t2 = claim_text(h10_nodes, " in");
      h10_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      h11 = claim_element(div0_nodes, "H1", { class: true });
      var h11_nodes = children(h11);
      t4 = claim_text(h11_nodes, "Touch");
      h11_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t5 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h40 = claim_element(div1_nodes, "H4", { class: true });
      var h40_nodes = children(h40);
      i1 = claim_element(h40_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t6 = claim_text(i1_nodes, "Shoot");
      i1_nodes.forEach(detach);
      t7 = claim_text(h40_nodes, " me an email ");
      br0 = claim_element(h40_nodes, "BR", {});
      a0 = claim_element(h40_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      i2 = claim_element(a0_nodes, "I", { class: true });
      children(i2).forEach(detach);
      a0_nodes.forEach(detach);
      h40_nodes.forEach(detach);
      t8 = claim_space(div1_nodes);
      h41 = claim_element(div1_nodes, "H4", { class: true });
      var h41_nodes = children(h41);
      i3 = claim_element(h41_nodes, "I", { class: true });
      var i3_nodes = children(i3);
      t9 = claim_text(i3_nodes, "Reach");
      i3_nodes.forEach(detach);
      t10 = claim_text(h41_nodes, " out to me on LinkedIn ");
      br1 = claim_element(h41_nodes, "BR", {});
      a1 = claim_element(h41_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      i4 = claim_element(a1_nodes, "I", { class: true });
      children(i4).forEach(detach);
      a1_nodes.forEach(detach);
      h41_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(link, "rel", "stylesheet");
      attr(link, "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
      attr(i0, "class", "word svelte-lkgl3g");
      attr(h10, "class", "first svelte-lkgl3g");
      attr(h11, "class", "second svelte-lkgl3g");
      attr(div0, "class", "container svelte-lkgl3g");
      attr(i1, "class", "word2 svelte-lkgl3g");
      attr(i2, "class", "fa fa-envelope");
      attr(a0, "class", "link svelte-lkgl3g");
      attr(a0, "href", "mailto:ianiket23@gmail.com");
      attr(h40, "class", "email");
      attr(i3, "class", "word2 svelte-lkgl3g");
      attr(i4, "class", "devicon-linkedin-plain");
      attr(a1, "class", "link svelte-lkgl3g");
      attr(a1, "href", "https://www.linkedin.com/in/ianiket23");
      attr(h41, "class", "linkedin");
      attr(div1, "class", "contactMethod svelte-lkgl3g");
    },
    m(target, anchor) {
      insert_hydration(target, link, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, main, anchor);
      append_hydration(main, div0);
      append_hydration(div0, h10);
      append_hydration(h10, i0);
      append_hydration(i0, t1);
      append_hydration(h10, t2);
      append_hydration(div0, t3);
      append_hydration(div0, h11);
      append_hydration(h11, t4);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h40);
      append_hydration(h40, i1);
      append_hydration(i1, t6);
      append_hydration(h40, t7);
      append_hydration(h40, br0);
      append_hydration(h40, a0);
      append_hydration(a0, i2);
      append_hydration(div1, t8);
      append_hydration(div1, h41);
      append_hydration(h41, i3);
      append_hydration(i3, t9);
      append_hydration(h41, t10);
      append_hydration(h41, br1);
      append_hydration(h41, a1);
      append_hydration(a1, i4);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(link);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(main);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(div1);
    }
  };
}
class Contact extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$4, safe_not_equal, {});
  }
}
const about_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let main;
  let div0;
  let h10;
  let i;
  let t0;
  let br;
  let t1;
  let t2;
  let h11;
  let t3;
  let t4;
  let div2;
  let div1;
  let ul;
  let li0;
  let h20;
  let t5;
  let t6;
  let p0;
  let t7;
  let t8;
  let li1;
  let h21;
  let t9;
  let t10;
  let p1;
  let t11;
  let t12;
  let li2;
  let h22;
  let t13;
  let t14;
  let p2;
  let t15;
  let t16;
  let li3;
  let h23;
  let t17;
  let t18;
  let p3;
  let t19;
  return {
    c() {
      main = element("main");
      div0 = element("div");
      h10 = element("h1");
      i = element("i");
      t0 = text("Meet");
      br = element("br");
      t1 = text("the Dev behind the");
      t2 = space();
      h11 = element("h1");
      t3 = text("Code");
      t4 = space();
      div2 = element("div");
      div1 = element("div");
      ul = element("ul");
      li0 = element("li");
      h20 = element("h2");
      t5 = text("Who am I?");
      t6 = space();
      p0 = element("p");
      t7 = text("I am a full-stack developer currently completing my \n        undergraduate Bachelor's degree in Computer Science \n        at the University of Albertain Edmonton, Canada.");
      t8 = space();
      li1 = element("li");
      h21 = element("h2");
      t9 = text("What am I passionate about?");
      t10 = space();
      p1 = element("p");
      t11 = text("I am passionate about using technology to solve real-world problems and improve people's lives.");
      t12 = space();
      li2 = element("li");
      h22 = element("h2");
      t13 = text("Hobbies?");
      t14 = space();
      p2 = element("p");
      t15 = text("When I'm not working, you can usually\n        find me reading books, playing guitar, or practicing taekwondo. I also enjoy meeting new people and learning \n        about their experiences and perspectives.");
      t16 = space();
      li3 = element("li");
      h23 = element("h2");
      t17 = text("Summer Plans?");
      t18 = space();
      p3 = element("p");
      t19 = text("I am an avid fan of motorsports and have recently started karting \n        as a hobby. I love following Formula 1 races and am looking forward to attending the Canadian Grand Prix in \n        Montreal this summer.");
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", {});
      var main_nodes = children(main);
      div0 = claim_element(main_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h10 = claim_element(div0_nodes, "H1", { class: true });
      var h10_nodes = children(h10);
      i = claim_element(h10_nodes, "I", { class: true });
      var i_nodes = children(i);
      t0 = claim_text(i_nodes, "Meet");
      i_nodes.forEach(detach);
      br = claim_element(h10_nodes, "BR", {});
      t1 = claim_text(h10_nodes, "the Dev behind the");
      h10_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      h11 = claim_element(div0_nodes, "H1", { class: true });
      var h11_nodes = children(h11);
      t3 = claim_text(h11_nodes, "Code");
      h11_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t4 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      ul = claim_element(div1_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", { class: true });
      var li0_nodes = children(li0);
      h20 = claim_element(li0_nodes, "H2", { class: true });
      var h20_nodes = children(h20);
      t5 = claim_text(h20_nodes, "Who am I?");
      h20_nodes.forEach(detach);
      t6 = claim_space(li0_nodes);
      p0 = claim_element(li0_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t7 = claim_text(p0_nodes, "I am a full-stack developer currently completing my \n        undergraduate Bachelor's degree in Computer Science \n        at the University of Albertain Edmonton, Canada.");
      p0_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t8 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", { class: true });
      var li1_nodes = children(li1);
      h21 = claim_element(li1_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      t9 = claim_text(h21_nodes, "What am I passionate about?");
      h21_nodes.forEach(detach);
      t10 = claim_space(li1_nodes);
      p1 = claim_element(li1_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t11 = claim_text(p1_nodes, "I am passionate about using technology to solve real-world problems and improve people's lives.");
      p1_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      t12 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", { class: true });
      var li2_nodes = children(li2);
      h22 = claim_element(li2_nodes, "H2", { class: true });
      var h22_nodes = children(h22);
      t13 = claim_text(h22_nodes, "Hobbies?");
      h22_nodes.forEach(detach);
      t14 = claim_space(li2_nodes);
      p2 = claim_element(li2_nodes, "P", { class: true });
      var p2_nodes = children(p2);
      t15 = claim_text(p2_nodes, "When I'm not working, you can usually\n        find me reading books, playing guitar, or practicing taekwondo. I also enjoy meeting new people and learning \n        about their experiences and perspectives.");
      p2_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      t16 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", { class: true });
      var li3_nodes = children(li3);
      h23 = claim_element(li3_nodes, "H2", { class: true });
      var h23_nodes = children(h23);
      t17 = claim_text(h23_nodes, "Summer Plans?");
      h23_nodes.forEach(detach);
      t18 = claim_space(li3_nodes);
      p3 = claim_element(li3_nodes, "P", { class: true });
      var p3_nodes = children(p3);
      t19 = claim_text(p3_nodes, "I am an avid fan of motorsports and have recently started karting \n        as a hobby. I love following Formula 1 races and am looking forward to attending the Canadian Grand Prix in \n        Montreal this summer.");
      p3_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i, "class", "word svelte-1pzimhc");
      attr(h10, "class", "first svelte-1pzimhc");
      attr(h11, "class", "second svelte-1pzimhc");
      attr(div0, "class", "container svelte-1pzimhc");
      attr(h20, "class", "svelte-1pzimhc");
      attr(p0, "class", "svelte-1pzimhc");
      attr(li0, "class", "svelte-1pzimhc");
      attr(h21, "class", "svelte-1pzimhc");
      attr(p1, "class", "svelte-1pzimhc");
      attr(li1, "class", "svelte-1pzimhc");
      attr(h22, "class", "svelte-1pzimhc");
      attr(p2, "class", "svelte-1pzimhc");
      attr(li2, "class", "svelte-1pzimhc");
      attr(h23, "class", "svelte-1pzimhc");
      attr(p3, "class", "svelte-1pzimhc");
      attr(li3, "class", "svelte-1pzimhc");
      attr(ul, "class", "svelte-1pzimhc");
      attr(div1, "class", "stickynotes svelte-1pzimhc");
      attr(div2, "class", "info");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, div0);
      append_hydration(div0, h10);
      append_hydration(h10, i);
      append_hydration(i, t0);
      append_hydration(h10, br);
      append_hydration(h10, t1);
      append_hydration(div0, t2);
      append_hydration(div0, h11);
      append_hydration(h11, t3);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, ul);
      append_hydration(ul, li0);
      append_hydration(li0, h20);
      append_hydration(h20, t5);
      append_hydration(li0, t6);
      append_hydration(li0, p0);
      append_hydration(p0, t7);
      append_hydration(ul, t8);
      append_hydration(ul, li1);
      append_hydration(li1, h21);
      append_hydration(h21, t9);
      append_hydration(li1, t10);
      append_hydration(li1, p1);
      append_hydration(p1, t11);
      append_hydration(ul, t12);
      append_hydration(ul, li2);
      append_hydration(li2, h22);
      append_hydration(h22, t13);
      append_hydration(li2, t14);
      append_hydration(li2, p2);
      append_hydration(p2, t15);
      append_hydration(ul, t16);
      append_hydration(ul, li3);
      append_hydration(li3, h23);
      append_hydration(h23, t17);
      append_hydration(li3, t18);
      append_hydration(li3, p3);
      append_hydration(p3, t19);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(main);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(div2);
    }
  };
}
class About extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$3, safe_not_equal, {});
  }
}
const skills_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let link;
  let t0;
  let main;
  let div0;
  let h10;
  let i0;
  let t1;
  let br;
  let t2;
  let t3;
  let h11;
  let t4;
  let t5;
  let div6;
  let div1;
  let h30;
  let t6;
  let t7;
  let i1;
  let t8;
  let i2;
  let t9;
  let i3;
  let t10;
  let i4;
  let t11;
  let i5;
  let t12;
  let div2;
  let h31;
  let t13;
  let t14;
  let i6;
  let t15;
  let i7;
  let t16;
  let i8;
  let t17;
  let i9;
  let t18;
  let div3;
  let h32;
  let t19;
  let t20;
  let i10;
  let t21;
  let i11;
  let t22;
  let i12;
  let t23;
  let i13;
  let t24;
  let i14;
  let t25;
  let div4;
  let h33;
  let t26;
  let t27;
  let i15;
  let t28;
  let i16;
  let t29;
  let div5;
  let h34;
  let t30;
  let t31;
  let i17;
  let t32;
  let i18;
  let t33;
  let i19;
  let t34;
  let i20;
  return {
    c() {
      link = element("link");
      t0 = space();
      main = element("main");
      div0 = element("div");
      h10 = element("h1");
      i0 = element("i");
      t1 = text("Here");
      br = element("br");
      t2 = text("are my");
      t3 = space();
      h11 = element("h1");
      t4 = text("Skills");
      t5 = space();
      div6 = element("div");
      div1 = element("div");
      h30 = element("h3");
      t6 = text("Languages");
      t7 = space();
      i1 = element("i");
      t8 = space();
      i2 = element("i");
      t9 = space();
      i3 = element("i");
      t10 = space();
      i4 = element("i");
      t11 = space();
      i5 = element("i");
      t12 = space();
      div2 = element("div");
      h31 = element("h3");
      t13 = text("Frontend");
      t14 = space();
      i6 = element("i");
      t15 = space();
      i7 = element("i");
      t16 = space();
      i8 = element("i");
      t17 = space();
      i9 = element("i");
      t18 = space();
      div3 = element("div");
      h32 = element("h3");
      t19 = text("Backend");
      t20 = space();
      i10 = element("i");
      t21 = space();
      i11 = element("i");
      t22 = space();
      i12 = element("i");
      t23 = space();
      i13 = element("i");
      t24 = space();
      i14 = element("i");
      t25 = space();
      div4 = element("div");
      h33 = element("h3");
      t26 = text("Mobile");
      t27 = space();
      i15 = element("i");
      t28 = space();
      i16 = element("i");
      t29 = space();
      div5 = element("div");
      h34 = element("h3");
      t30 = text("Tools & Others");
      t31 = space();
      i17 = element("i");
      t32 = space();
      i18 = element("i");
      t33 = space();
      i19 = element("i");
      t34 = space();
      i20 = element("i");
      this.h();
    },
    l(nodes) {
      link = claim_element(nodes, "LINK", { rel: true, href: true });
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", {});
      var main_nodes = children(main);
      div0 = claim_element(main_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h10 = claim_element(div0_nodes, "H1", { class: true });
      var h10_nodes = children(h10);
      i0 = claim_element(h10_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t1 = claim_text(i0_nodes, "Here");
      i0_nodes.forEach(detach);
      br = claim_element(h10_nodes, "BR", {});
      t2 = claim_text(h10_nodes, "are my");
      h10_nodes.forEach(detach);
      t3 = claim_space(div0_nodes);
      h11 = claim_element(div0_nodes, "H1", { class: true });
      var h11_nodes = children(h11);
      t4 = claim_text(h11_nodes, "Skills");
      h11_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t5 = claim_space(main_nodes);
      div6 = claim_element(main_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div1 = claim_element(div6_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h30 = claim_element(div1_nodes, "H3", { class: true });
      var h30_nodes = children(h30);
      t6 = claim_text(h30_nodes, "Languages");
      h30_nodes.forEach(detach);
      t7 = claim_space(div1_nodes);
      i1 = claim_element(div1_nodes, "I", { class: true });
      children(i1).forEach(detach);
      t8 = claim_space(div1_nodes);
      i2 = claim_element(div1_nodes, "I", { class: true });
      children(i2).forEach(detach);
      t9 = claim_space(div1_nodes);
      i3 = claim_element(div1_nodes, "I", { class: true });
      children(i3).forEach(detach);
      t10 = claim_space(div1_nodes);
      i4 = claim_element(div1_nodes, "I", { class: true });
      children(i4).forEach(detach);
      t11 = claim_space(div1_nodes);
      i5 = claim_element(div1_nodes, "I", { class: true });
      children(i5).forEach(detach);
      div1_nodes.forEach(detach);
      t12 = claim_space(div6_nodes);
      div2 = claim_element(div6_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h31 = claim_element(div2_nodes, "H3", { class: true });
      var h31_nodes = children(h31);
      t13 = claim_text(h31_nodes, "Frontend");
      h31_nodes.forEach(detach);
      t14 = claim_space(div2_nodes);
      i6 = claim_element(div2_nodes, "I", { class: true });
      children(i6).forEach(detach);
      t15 = claim_space(div2_nodes);
      i7 = claim_element(div2_nodes, "I", { class: true });
      children(i7).forEach(detach);
      t16 = claim_space(div2_nodes);
      i8 = claim_element(div2_nodes, "I", { class: true });
      children(i8).forEach(detach);
      t17 = claim_space(div2_nodes);
      i9 = claim_element(div2_nodes, "I", { class: true });
      children(i9).forEach(detach);
      div2_nodes.forEach(detach);
      t18 = claim_space(div6_nodes);
      div3 = claim_element(div6_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h32 = claim_element(div3_nodes, "H3", { class: true });
      var h32_nodes = children(h32);
      t19 = claim_text(h32_nodes, "Backend");
      h32_nodes.forEach(detach);
      t20 = claim_space(div3_nodes);
      i10 = claim_element(div3_nodes, "I", { class: true });
      children(i10).forEach(detach);
      t21 = claim_space(div3_nodes);
      i11 = claim_element(div3_nodes, "I", { class: true });
      children(i11).forEach(detach);
      t22 = claim_space(div3_nodes);
      i12 = claim_element(div3_nodes, "I", { class: true });
      children(i12).forEach(detach);
      t23 = claim_space(div3_nodes);
      i13 = claim_element(div3_nodes, "I", { class: true });
      children(i13).forEach(detach);
      t24 = claim_space(div3_nodes);
      i14 = claim_element(div3_nodes, "I", { class: true });
      children(i14).forEach(detach);
      div3_nodes.forEach(detach);
      t25 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h33 = claim_element(div4_nodes, "H3", { class: true });
      var h33_nodes = children(h33);
      t26 = claim_text(h33_nodes, "Mobile");
      h33_nodes.forEach(detach);
      t27 = claim_space(div4_nodes);
      i15 = claim_element(div4_nodes, "I", { class: true });
      children(i15).forEach(detach);
      t28 = claim_space(div4_nodes);
      i16 = claim_element(div4_nodes, "I", { class: true });
      children(i16).forEach(detach);
      div4_nodes.forEach(detach);
      t29 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      h34 = claim_element(div5_nodes, "H3", { class: true });
      var h34_nodes = children(h34);
      t30 = claim_text(h34_nodes, "Tools & Others");
      h34_nodes.forEach(detach);
      t31 = claim_space(div5_nodes);
      i17 = claim_element(div5_nodes, "I", { class: true });
      children(i17).forEach(detach);
      t32 = claim_space(div5_nodes);
      i18 = claim_element(div5_nodes, "I", { class: true });
      children(i18).forEach(detach);
      t33 = claim_space(div5_nodes);
      i19 = claim_element(div5_nodes, "I", { class: true });
      children(i19).forEach(detach);
      t34 = claim_space(div5_nodes);
      i20 = claim_element(div5_nodes, "I", { class: true });
      children(i20).forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(link, "rel", "stylesheet");
      attr(link, "href", "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css");
      attr(i0, "class", "word svelte-y3yen6");
      attr(h10, "class", "first svelte-y3yen6");
      attr(h11, "class", "second svelte-y3yen6");
      attr(div0, "class", "container svelte-y3yen6");
      attr(h30, "class", "lheading svelte-y3yen6");
      attr(i1, "class", "devicon-python-plain-wordmark");
      attr(i2, "class", "devicon-javascript-plain");
      attr(i3, "class", "devicon-java-plain-wordmark");
      attr(i4, "class", "devicon-c-plain-wordmark");
      attr(i5, "class", "devicon-go-original-wordmark");
      attr(div1, "class", "languages svelte-y3yen6");
      attr(h31, "class", "fheading svelte-y3yen6");
      attr(i6, "class", "devicon-react-original-wordmark");
      attr(i7, "class", "devicon-svelte-plain-wordmark");
      attr(i8, "class", "devicon-html5-plain-wordmark");
      attr(i9, "class", "devicon-css3-plain-wordmark");
      attr(div2, "class", "frontend svelte-y3yen6");
      attr(h32, "class", "bheading svelte-y3yen6");
      attr(i10, "class", "devicon-django-plain-wordmark");
      attr(i11, "class", "devicon-flask-original-wordmark");
      attr(i12, "class", "devicon-firebase-plain-wordmark");
      attr(i13, "class", "devicon-mongodb-plain-wordmark");
      attr(i14, "class", "devicon-nginx-original-wordmark");
      attr(div3, "class", "backend svelte-y3yen6");
      attr(h33, "class", "mheading svelte-y3yen6");
      attr(i15, "class", "devicon-androidstudio-plain-wordmark");
      attr(i16, "class", "devicon-flutter-plain");
      attr(div4, "class", "mobile svelte-y3yen6");
      attr(h34, "class", "theading svelte-y3yen6");
      attr(i17, "class", "devicon-tensorflow-original");
      attr(i18, "class", "devicon-git-plain-wordmark");
      attr(i19, "class", "devicon-github-original-wordmark");
      attr(i20, "class", "devicon-docker-plain-wordmark");
      attr(div5, "class", "tools svelte-y3yen6");
      attr(div6, "class", "techStack svelte-y3yen6");
    },
    m(target, anchor) {
      insert_hydration(target, link, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, main, anchor);
      append_hydration(main, div0);
      append_hydration(div0, h10);
      append_hydration(h10, i0);
      append_hydration(i0, t1);
      append_hydration(h10, br);
      append_hydration(h10, t2);
      append_hydration(div0, t3);
      append_hydration(div0, h11);
      append_hydration(h11, t4);
      append_hydration(main, t5);
      append_hydration(main, div6);
      append_hydration(div6, div1);
      append_hydration(div1, h30);
      append_hydration(h30, t6);
      append_hydration(div1, t7);
      append_hydration(div1, i1);
      append_hydration(div1, t8);
      append_hydration(div1, i2);
      append_hydration(div1, t9);
      append_hydration(div1, i3);
      append_hydration(div1, t10);
      append_hydration(div1, i4);
      append_hydration(div1, t11);
      append_hydration(div1, i5);
      append_hydration(div6, t12);
      append_hydration(div6, div2);
      append_hydration(div2, h31);
      append_hydration(h31, t13);
      append_hydration(div2, t14);
      append_hydration(div2, i6);
      append_hydration(div2, t15);
      append_hydration(div2, i7);
      append_hydration(div2, t16);
      append_hydration(div2, i8);
      append_hydration(div2, t17);
      append_hydration(div2, i9);
      append_hydration(div6, t18);
      append_hydration(div6, div3);
      append_hydration(div3, h32);
      append_hydration(h32, t19);
      append_hydration(div3, t20);
      append_hydration(div3, i10);
      append_hydration(div3, t21);
      append_hydration(div3, i11);
      append_hydration(div3, t22);
      append_hydration(div3, i12);
      append_hydration(div3, t23);
      append_hydration(div3, i13);
      append_hydration(div3, t24);
      append_hydration(div3, i14);
      append_hydration(div6, t25);
      append_hydration(div6, div4);
      append_hydration(div4, h33);
      append_hydration(h33, t26);
      append_hydration(div4, t27);
      append_hydration(div4, i15);
      append_hydration(div4, t28);
      append_hydration(div4, i16);
      append_hydration(div6, t29);
      append_hydration(div6, div5);
      append_hydration(div5, h34);
      append_hydration(h34, t30);
      append_hydration(div5, t31);
      append_hydration(div5, i17);
      append_hydration(div5, t32);
      append_hydration(div5, i18);
      append_hydration(div5, t33);
      append_hydration(div5, i19);
      append_hydration(div5, t34);
      append_hydration(div5, i20);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(link);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(main);
    }
  };
}
class Skills extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$2, safe_not_equal, {});
  }
}
const projects_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let main;
  let div0;
  let h10;
  let i0;
  let t0;
  let br0;
  let t1;
  let t2;
  let h11;
  let t3;
  let t4;
  let div11;
  let div5;
  let div3;
  let section0;
  let div1;
  let span0;
  let t5;
  let span1;
  let t6;
  let span2;
  let t7;
  let div2;
  let img0;
  let img0_src_value;
  let t8;
  let div4;
  let h20;
  let t9;
  let t10;
  let p0;
  let t11;
  let br1;
  let t12;
  let br2;
  let t13;
  let br3;
  let br4;
  let t14;
  let a0;
  let t15;
  let t16;
  let a1;
  let t17;
  let t18;
  let a2;
  let t19;
  let t20;
  let div10;
  let div6;
  let h21;
  let t21;
  let t22;
  let p1;
  let t23;
  let br5;
  let br6;
  let t24;
  let br7;
  let br8;
  let t25;
  let a3;
  let t26;
  let t27;
  let div9;
  let section1;
  let div7;
  let span3;
  let t28;
  let span4;
  let t29;
  let span5;
  let t30;
  let div8;
  let img1;
  let img1_src_value;
  let t31;
  let i2;
  let t32;
  let i1;
  let t33;
  let t34;
  return {
    c() {
      main = element("main");
      div0 = element("div");
      h10 = element("h1");
      i0 = element("i");
      t0 = text("Let's");
      br0 = element("br");
      t1 = text("see some of my");
      t2 = space();
      h11 = element("h1");
      t3 = text("Projects");
      t4 = space();
      div11 = element("div");
      div5 = element("div");
      div3 = element("div");
      section0 = element("section");
      div1 = element("div");
      span0 = element("span");
      t5 = space();
      span1 = element("span");
      t6 = space();
      span2 = element("span");
      t7 = space();
      div2 = element("div");
      img0 = element("img");
      t8 = space();
      div4 = element("div");
      h20 = element("h2");
      t9 = text("Project 1 - Toneteller");
      t10 = space();
      p0 = element("p");
      t11 = text("Toneteller is a web application and \n              chrome extension that uses machine learning \n              and artificial intelligence to perform sentiment \n              analysis on the text that a user has entered.");
      br1 = element("br");
      t12 = space();
      br2 = element("br");
      t13 = text("My team and I developed this project during \n              a hackathon where it was awarded second place.");
      br3 = element("br");
      br4 = element("br");
      t14 = space();
      a0 = element("a");
      t15 = text("Website");
      t16 = text("\n               ");
      a1 = element("a");
      t17 = text("Github");
      t18 = text("\n               ");
      a2 = element("a");
      t19 = text("Devpost");
      t20 = space();
      div10 = element("div");
      div6 = element("div");
      h21 = element("h2");
      t21 = text("Project 2 - Experimenter");
      t22 = space();
      p1 = element("p");
      t23 = text("It is an Android app that simplifies experiment and test recording with \n        built-in patterns for Binomial and Non-Negative tests, and displays \n        locations through Google Map API.");
      br5 = element("br");
      br6 = element("br");
      t24 = text(" The app allows in-depth analysis of experiment data. Overall, this app is a \n        valuable tool to efficiently conduct and analyze experiments on the go.");
      br7 = element("br");
      br8 = element("br");
      t25 = space();
      a3 = element("a");
      t26 = text("Github");
      t27 = space();
      div9 = element("div");
      section1 = element("section");
      div7 = element("div");
      span3 = element("span");
      t28 = space();
      span4 = element("span");
      t29 = space();
      span5 = element("span");
      t30 = space();
      div8 = element("div");
      img1 = element("img");
      t31 = space();
      i2 = element("i");
      t32 = text("More ");
      i1 = element("i");
      t33 = text("projects");
      t34 = text(" will be added soon!");
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", {});
      var main_nodes = children(main);
      div0 = claim_element(main_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h10 = claim_element(div0_nodes, "H1", { class: true });
      var h10_nodes = children(h10);
      i0 = claim_element(h10_nodes, "I", { class: true });
      var i0_nodes = children(i0);
      t0 = claim_text(i0_nodes, "Let's");
      i0_nodes.forEach(detach);
      br0 = claim_element(h10_nodes, "BR", {});
      t1 = claim_text(h10_nodes, "see some of my");
      h10_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      h11 = claim_element(div0_nodes, "H1", { class: true });
      var h11_nodes = children(h11);
      t3 = claim_text(h11_nodes, "Projects");
      h11_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t4 = claim_space(nodes);
      div11 = claim_element(nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div5 = claim_element(div11_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      section0 = claim_element(div3_nodes, "SECTION", { class: true });
      var section0_nodes = children(section0);
      div1 = claim_element(section0_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      span0 = claim_element(div1_nodes, "SPAN", { class: true });
      children(span0).forEach(detach);
      t5 = claim_space(div1_nodes);
      span1 = claim_element(div1_nodes, "SPAN", { class: true });
      children(span1).forEach(detach);
      t6 = claim_space(div1_nodes);
      span2 = claim_element(div1_nodes, "SPAN", { class: true });
      children(span2).forEach(detach);
      div1_nodes.forEach(detach);
      t7 = claim_space(section0_nodes);
      div2 = claim_element(section0_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      img0 = claim_element(div2_nodes, "IMG", { src: true, alt: true, style: true });
      div2_nodes.forEach(detach);
      section0_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t8 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h20 = claim_element(div4_nodes, "H2", { class: true });
      var h20_nodes = children(h20);
      t9 = claim_text(h20_nodes, "Project 1 - Toneteller");
      h20_nodes.forEach(detach);
      t10 = claim_space(div4_nodes);
      p0 = claim_element(div4_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t11 = claim_text(p0_nodes, "Toneteller is a web application and \n              chrome extension that uses machine learning \n              and artificial intelligence to perform sentiment \n              analysis on the text that a user has entered.");
      br1 = claim_element(p0_nodes, "BR", {});
      t12 = claim_space(p0_nodes);
      br2 = claim_element(p0_nodes, "BR", {});
      t13 = claim_text(p0_nodes, "My team and I developed this project during \n              a hackathon where it was awarded second place.");
      br3 = claim_element(p0_nodes, "BR", {});
      br4 = claim_element(p0_nodes, "BR", {});
      t14 = claim_space(p0_nodes);
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t15 = claim_text(a0_nodes, "Website");
      a0_nodes.forEach(detach);
      t16 = claim_text(p0_nodes, "\n               ");
      a1 = claim_element(p0_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t17 = claim_text(a1_nodes, "Github");
      a1_nodes.forEach(detach);
      t18 = claim_text(p0_nodes, "\n               ");
      a2 = claim_element(p0_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t19 = claim_text(a2_nodes, "Devpost");
      a2_nodes.forEach(detach);
      p0_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      t20 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div6 = claim_element(div10_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      h21 = claim_element(div6_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      t21 = claim_text(h21_nodes, "Project 2 - Experimenter");
      h21_nodes.forEach(detach);
      t22 = claim_space(div6_nodes);
      p1 = claim_element(div6_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t23 = claim_text(p1_nodes, "It is an Android app that simplifies experiment and test recording with \n        built-in patterns for Binomial and Non-Negative tests, and displays \n        locations through Google Map API.");
      br5 = claim_element(p1_nodes, "BR", {});
      br6 = claim_element(p1_nodes, "BR", {});
      t24 = claim_text(p1_nodes, " The app allows in-depth analysis of experiment data. Overall, this app is a \n        valuable tool to efficiently conduct and analyze experiments on the go.");
      br7 = claim_element(p1_nodes, "BR", {});
      br8 = claim_element(p1_nodes, "BR", {});
      t25 = claim_space(p1_nodes);
      a3 = claim_element(p1_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t26 = claim_text(a3_nodes, "Github");
      a3_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      t27 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      section1 = claim_element(div9_nodes, "SECTION", { class: true });
      var section1_nodes = children(section1);
      div7 = claim_element(section1_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      span3 = claim_element(div7_nodes, "SPAN", { class: true });
      children(span3).forEach(detach);
      t28 = claim_space(div7_nodes);
      span4 = claim_element(div7_nodes, "SPAN", { class: true });
      children(span4).forEach(detach);
      t29 = claim_space(div7_nodes);
      span5 = claim_element(div7_nodes, "SPAN", { class: true });
      children(span5).forEach(detach);
      div7_nodes.forEach(detach);
      t30 = claim_space(section1_nodes);
      div8 = claim_element(section1_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      img1 = claim_element(div8_nodes, "IMG", { src: true, alt: true, style: true });
      div8_nodes.forEach(detach);
      section1_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      t31 = claim_space(div11_nodes);
      i2 = claim_element(div11_nodes, "I", { class: true });
      var i2_nodes = children(i2);
      t32 = claim_text(i2_nodes, "More ");
      i1 = claim_element(i2_nodes, "I", { class: true });
      var i1_nodes = children(i1);
      t33 = claim_text(i1_nodes, "projects");
      i1_nodes.forEach(detach);
      t34 = claim_text(i2_nodes, " will be added soon!");
      i2_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(i0, "class", "word svelte-10uiutg");
      attr(h10, "class", "first svelte-10uiutg");
      attr(h11, "class", "second svelte-10uiutg");
      attr(div0, "class", "container svelte-10uiutg");
      attr(span0, "class", "svelte-10uiutg");
      attr(span1, "class", "svelte-10uiutg");
      attr(span2, "class", "svelte-10uiutg");
      attr(div1, "class", "toolbar svelte-10uiutg");
      if (!src_url_equal(img0.src, img0_src_value = "img/p1.gif"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "Avatar");
      set_style(img0, "width", "100%");
      attr(div2, "class", "container2 svelte-10uiutg");
      attr(section0, "class", "svelte-10uiutg");
      attr(div3, "class", "demo svelte-10uiutg");
      attr(h20, "class", "svelte-10uiutg");
      attr(a0, "href", "https://hackathon-hacked2023.github.io/DivineInspiration/");
      attr(a1, "href", "https://github.com/Hackathon-Hacked2023/DivineInspiration");
      attr(a2, "href", "https://devpost.com/software/toneteller");
      attr(p0, "class", "svelte-10uiutg");
      attr(div4, "class", "stickynotes svelte-10uiutg");
      attr(div5, "class", "p1 svelte-10uiutg");
      attr(h21, "class", "svelte-10uiutg");
      attr(a3, "href", "https://github.com/CMPUT301W21T21-H03/Experimenter");
      attr(p1, "class", "svelte-10uiutg");
      attr(div6, "class", "stickynotes2 svelte-10uiutg");
      attr(span3, "class", "svelte-10uiutg");
      attr(span4, "class", "svelte-10uiutg");
      attr(span5, "class", "svelte-10uiutg");
      attr(div7, "class", "toolbar svelte-10uiutg");
      if (!src_url_equal(img1.src, img1_src_value = "img/p2.gif"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "Avatar");
      set_style(img1, "width", "100%");
      attr(div8, "class", "container2 svelte-10uiutg");
      attr(section1, "class", "svelte-10uiutg");
      attr(div9, "class", "demo svelte-10uiutg");
      attr(div10, "class", "p1 svelte-10uiutg");
      attr(i1, "class", "word4 svelte-10uiutg");
      attr(i2, "class", "final svelte-10uiutg");
      attr(div11, "class", "allProjects svelte-10uiutg");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, div0);
      append_hydration(div0, h10);
      append_hydration(h10, i0);
      append_hydration(i0, t0);
      append_hydration(h10, br0);
      append_hydration(h10, t1);
      append_hydration(div0, t2);
      append_hydration(div0, h11);
      append_hydration(h11, t3);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, div11, anchor);
      append_hydration(div11, div5);
      append_hydration(div5, div3);
      append_hydration(div3, section0);
      append_hydration(section0, div1);
      append_hydration(div1, span0);
      append_hydration(div1, t5);
      append_hydration(div1, span1);
      append_hydration(div1, t6);
      append_hydration(div1, span2);
      append_hydration(section0, t7);
      append_hydration(section0, div2);
      append_hydration(div2, img0);
      append_hydration(div5, t8);
      append_hydration(div5, div4);
      append_hydration(div4, h20);
      append_hydration(h20, t9);
      append_hydration(div4, t10);
      append_hydration(div4, p0);
      append_hydration(p0, t11);
      append_hydration(p0, br1);
      append_hydration(p0, t12);
      append_hydration(p0, br2);
      append_hydration(p0, t13);
      append_hydration(p0, br3);
      append_hydration(p0, br4);
      append_hydration(p0, t14);
      append_hydration(p0, a0);
      append_hydration(a0, t15);
      append_hydration(p0, t16);
      append_hydration(p0, a1);
      append_hydration(a1, t17);
      append_hydration(p0, t18);
      append_hydration(p0, a2);
      append_hydration(a2, t19);
      append_hydration(div11, t20);
      append_hydration(div11, div10);
      append_hydration(div10, div6);
      append_hydration(div6, h21);
      append_hydration(h21, t21);
      append_hydration(div6, t22);
      append_hydration(div6, p1);
      append_hydration(p1, t23);
      append_hydration(p1, br5);
      append_hydration(p1, br6);
      append_hydration(p1, t24);
      append_hydration(p1, br7);
      append_hydration(p1, br8);
      append_hydration(p1, t25);
      append_hydration(p1, a3);
      append_hydration(a3, t26);
      append_hydration(div10, t27);
      append_hydration(div10, div9);
      append_hydration(div9, section1);
      append_hydration(section1, div7);
      append_hydration(div7, span3);
      append_hydration(div7, t28);
      append_hydration(div7, span4);
      append_hydration(div7, t29);
      append_hydration(div7, span5);
      append_hydration(section1, t30);
      append_hydration(section1, div8);
      append_hydration(div8, img1);
      append_hydration(div11, t31);
      append_hydration(div11, i2);
      append_hydration(i2, t32);
      append_hydration(i2, i1);
      append_hydration(i1, t33);
      append_hydration(i2, t34);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(main);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(div11);
    }
  };
}
class Projects extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div0;
  let maintext;
  let t0;
  let me;
  let t1;
  let div1;
  let skills;
  let t2;
  let div2;
  let projects;
  let t3;
  let div3;
  let about;
  let t4;
  let div4;
  let contact;
  let current;
  maintext = new MainText({});
  me = new Me({});
  skills = new Skills({});
  projects = new Projects({});
  about = new About({});
  contact = new Contact({});
  return {
    c() {
      div0 = element("div");
      create_component(maintext.$$.fragment);
      t0 = space();
      create_component(me.$$.fragment);
      t1 = space();
      div1 = element("div");
      create_component(skills.$$.fragment);
      t2 = space();
      div2 = element("div");
      create_component(projects.$$.fragment);
      t3 = space();
      div3 = element("div");
      create_component(about.$$.fragment);
      t4 = space();
      div4 = element("div");
      create_component(contact.$$.fragment);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { id: true, class: true });
      var div0_nodes = children(div0);
      claim_component(maintext.$$.fragment, div0_nodes);
      t0 = claim_space(div0_nodes);
      claim_component(me.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { id: true, class: true });
      var div1_nodes = children(div1);
      claim_component(skills.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { id: true, class: true });
      var div2_nodes = children(div2);
      claim_component(projects.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      t3 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { id: true, class: true });
      var div3_nodes = children(div3);
      claim_component(about.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      t4 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", { id: true, class: true });
      var div4_nodes = children(div4);
      claim_component(contact.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "id", "home");
      attr(div0, "class", "svelte-1p90f2e");
      attr(div1, "id", "skills");
      attr(div1, "class", "svelte-1p90f2e");
      attr(div2, "id", "projects");
      attr(div2, "class", "svelte-1p90f2e");
      attr(div3, "id", "about");
      attr(div3, "class", "svelte-1p90f2e");
      attr(div4, "id", "contact");
      attr(div4, "class", "svelte-1p90f2e");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      mount_component(maintext, div0, null);
      append_hydration(div0, t0);
      mount_component(me, div0, null);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      mount_component(skills, div1, null);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div2, anchor);
      mount_component(projects, div2, null);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, div3, anchor);
      mount_component(about, div3, null);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, div4, anchor);
      mount_component(contact, div4, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(maintext.$$.fragment, local);
      transition_in(me.$$.fragment, local);
      transition_in(skills.$$.fragment, local);
      transition_in(projects.$$.fragment, local);
      transition_in(about.$$.fragment, local);
      transition_in(contact.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(maintext.$$.fragment, local);
      transition_out(me.$$.fragment, local);
      transition_out(skills.$$.fragment, local);
      transition_out(projects.$$.fragment, local);
      transition_out(about.$$.fragment, local);
      transition_out(contact.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      destroy_component(maintext);
      destroy_component(me);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      destroy_component(skills);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div2);
      destroy_component(projects);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div3);
      destroy_component(about);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(div4);
      destroy_component(contact);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
