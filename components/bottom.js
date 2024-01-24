import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import Trending from "./trending";
const Bottom = ({ blogs }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "inherit",
      }}
    >
      <div
        style={{
          borderTop: "1px solid rgb(230,230,230)",
          display: "block",
          boxSizing: "inherit",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            boxSizing: "inherit",
          }}
        >
          <div
            style={{
              display: "block",
              margin: "0px 64px",
              maxWidth: "1192px",
              width: "100%",
              minWidth: 0,
              boxSizing: "inherit",
            }}
          >
            <div
              style={{
                display: "block",
                paddingTop: "16px",
                paddingBottom: "40px",
                boxSizing: "inherit",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "16px",
                  boxSizing: "inherit",
                }}
              >
                <WhatshotOutlinedIcon />
                <div
                  style={{
                    display: "block",
                    boxSizing: "inherit",
                  }}
                >
                  <p
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.083em",
                      fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: 700,
                      boxSizing: "inherit",
                      color: "black",
                      margin: 0,
                    }}
                  >
                    Trending on Gemini
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "block",
                  boxSizing: "inherit",
                }}
              >
                <div
                  style={{
                    boxSizing: "inherit",
                    marginLeft: "-16px",
                    marginRight: "-16px",
                    width: "calc(100%+32px)",
                    flexWrap: "wrap",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                ></div>
              </div>
              <Trending blogs={blogs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
