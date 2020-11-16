const HeaderImage = {
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};

const VerticalNav = {
  methods: {
    scrollToElement(elem) {
      let element_id = document.getElementById(elem);
      if (element_id) {
        element_id.scrollIntoView({block: "start", behavior: "smooth"});
      }
    },
    scrollListener() {
      var contentSections = document.getElementsByClassName("cd-section");

      if (!document.getElementById("cd-vertical-nav")) return;

      var navigationItems = document
        .getElementById("cd-vertical-nav")
        .getElementsByTagName("a");


      for (let i = 0; i < contentSections.length; i++) {
        var activeSection =
          parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
        if (
          contentSections[i].offsetTop -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop <
          window.pageYOffset &&
          contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop >
          window.pageYOffset
        ) {
          navigationItems[activeSection].classList.add("is-selected");
        } else {
          navigationItems[activeSection].classList.remove("is-selected");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};

const ShoppingCart = {
  computed: {
    shoppingTotal() {
      return this.shoppingCartTable.reduce((accumulator, current) => {
        return accumulator + current.amount;
      }, 0);
    }
  },
  methods: {
    increaseQuantity(item) {
      item.qty++;
      this.computeAmount(item);
    },
    decreaseQuantity(item) {
      if (item.qty > 1) {
        item.qty--;
        this.computeAmount(item);
      }
    },
    computeAmount(item) {
      item.amount = item.qty * item.price;
    }
  }
};

const Mixins = {
  VerticalNav,
  ShoppingCart,
  HeaderImage,
};

export default Mixins;
