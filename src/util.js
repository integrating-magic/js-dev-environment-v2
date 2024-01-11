export function init(booter) {
  //   alert("init");
  window.__initialProps__ = "__PROPS__";
  console.log("init", window.__initialProps__);
  if (window.__initialProps__ !== "__PROPS__") {
    try {
      window.__initialProps__ = JSON.parse(window.__initialProps__);
      console.log("initialProps", window.__initialProps__);
    } catch (error) {
      console.log("error parsing initialProps", error);
    }
    // window.__initialProps__.webDirectRefresh = webDirectRefresh;
    // we may need to wait for FileMaker
    let checkFMInterval = setInterval(() => {
      if (window.FileMaker) {
        clearInterval(checkFMInterval);
        booter(window.__initialProps__);
      }
    }, 100);
  } else {
    //
    //
    // we haven't merged so install loadInitialProps method for FM to use
    window.loadWidget = function (props) {
      try {
        props = JSON.parse(props);
      } catch (error) {}
      // boot the widget with those props
      //   props.webDirectRefresh = webDirectRefresh;
      window.__initialProps__ = props;
      booter(props);
    };
  }
}
