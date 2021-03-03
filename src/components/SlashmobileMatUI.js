import React from 'react';
import { AddOutlined } from "@material-ui/icons";
import { ArrowBackOutlined } from "@material-ui/icons";
import { ArrowForwardOutlined } from "@material-ui/icons";
import { BackspaceOutlined } from "@material-ui/icons";
import { BatteryFullOutlined } from "@material-ui/icons";
import { CardGiftcardOutlined } from "@material-ui/icons";
import { CloseOutlined } from "@material-ui/icons";
import { KeyboardArrowDownOutlined } from "@material-ui/icons";
import { KeyboardArrowRightOutlined } from "@material-ui/icons";
import { MenuOutlined } from "@material-ui/icons";
import { MinimizeOutlined } from "@material-ui/icons";
import { MoreHorizOutlined } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import { SignalCellularAltOutlined } from "@material-ui/icons";
import { WifiOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function SlashmobileMatUI(props) {
  return (
    <div>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{ width: "375px", backgroundColor: "#0D0D21", height: "812px" }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item>
            <img src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Logo.png"></img>
          </Grid>
          <Grid zeroMinWidth item>
            <Link
              variant="h4"
              align="center"
              underline="none"
              style={{ color: "#ffffff" }}
            >
              Xoin
            </Link>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{ width: "375px", backgroundColor: "#0D0D21", height: "812px" }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item>
            <Grid
              container
              alignContent="center"
              spacing={1}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid zeroMinWidth item>
                <img src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Logo.png"></img>
              </Grid>
              <Grid zeroMinWidth item>
                <Link
                  variant="h4"
                  align="center"
                  underline="none"
                  style={{ color: "#ffffff" }}
                >
                  Xoin
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography variant="body2" align="center" color="textPrimary">
                  Use and earn them to get some funny goodies
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                  <MoreHorizOutlined style={{ fontSize: "40px" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ paddingBottom: "50px" }}
            >
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                  style={{
                    backgroundColor: "#3247E5",
                    borderRadius: "50px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <Grid zeroMinWidth item>
                    <Button
                      size="large"
                      style={{ color: "#ffffff", textTransform: "none" }}
                    >
                      Log In
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff" }}>
                      <ArrowForwardOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                  style={{
                    backgroundColor: "#16162B",
                    borderRadius: "50px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <Grid zeroMinWidth item>
                    <Button
                      size="large"
                      style={{ color: "#ffffff", textTransform: "none" }}
                    >
                      Contact Us
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff" }}>
                      <ArrowForwardOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              direction="row"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#252537",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{ width: "375px", backgroundColor: "#3247E5", height: "812px" }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container style={{ paddingTop: "20px" }}>
              <Grid zeroMinWidth item>
                <IconButton style={{ padding: "0px" }}>
                  <CloseOutlined style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ marginTop: "-100px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid zeroMinWidth item>
                <Avatar
                  src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Avatar.png"
                  style={{ width: "70px", height: "70px" }}
                ></Avatar>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h6"
                  align="center"
                  color="textPrimary"
                  style={{ color: "#ffffff" }}
                >
                  Jeremy Lee
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body2"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.73)" }}
                >
                  Product Designer at Tooploox
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item>
            <Grid
              container
              alignContent="center"
              spacing={3}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid zeroMinWidth item>
                <Typography
                  variant="body1"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Wallet
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h4"
                  align="center"
                  color="textPrimary"
                  style={{ color: "#ffffff" }}
                >
                  Xoin Market
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body1"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Transaction History
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body1"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Settings
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body1"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Help Center
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              style={{ paddingBottom: "20px" }}
            >
              <Grid zeroMinWidth item>
                <Button
                  size="large"
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    textTransform: "none",
                  }}
                >
                  Log Out
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#CECED2",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{ width: "375px", backgroundColor: "#3247E5", height: "812px" }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container style={{ paddingTop: "20px" }}>
              <Grid zeroMinWidth item>
                <IconButton style={{ padding: "0px" }}>
                  <CloseOutlined style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ marginTop: "-100px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid zeroMinWidth item>
                <Avatar
                  src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Avatar.png"
                  style={{ width: "70px", height: "70px" }}
                ></Avatar>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h6"
                  align="center"
                  color="textPrimary"
                  style={{ color: "#ffffff" }}
                >
                  Jeremy Lee
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body2"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.73)" }}
                >
                  Product Designer at Tooploox
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item>
            <Grid
              container
              alignContent="center"
              spacing={3}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid zeroMinWidth item>
                <Typography
                  variant="h4"
                  align="center"
                  color="textPrimary"
                  style={{ color: "#ffffff" }}
                >
                  Wallet
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body1"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Xoin Market
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body1"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Transaction History
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body1"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Settings
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body1"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Help Center
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              style={{ paddingBottom: "20px" }}
            >
              <Grid zeroMinWidth item>
                <Button
                  size="large"
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    textTransform: "none",
                  }}
                >
                  Log Out
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#CECED2",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{
          width: "375px",
          backgroundColor: "#0D0D21",
          position: "relative",
          height: "812px",
        }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
              style={{ paddingTop: "20px" }}
            >
              <Grid zeroMinWidth item>
                <IconButton style={{ padding: "0px" }}>
                  <CloseOutlined style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ color: "#ffffff" }}>
                  Transaction History
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <IconButton style={{ padding: "0px" }}>
                  <SearchOutlined style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <Grid zeroMinWidth item>
                <Link underline="none" style={{ color: "#ffffff" }}>
                  1W
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link underline="none" style={{ color: "#ffffff" }}>
                  1M
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link
                  underline="none"
                  style={{
                    backgroundColor: "#3247E5",
                    borderRadius: "20px",
                    paddingTop: "5px",
                    color: "#ffffff",
                    paddingLeft: "15px",
                    paddingBottom: "7px",
                    paddingRight: "15px",
                    height: "auto",
                  }}
                >
                  1M
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link underline="none" style={{ color: "#ffffff" }}>
                  1Y
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <Link underline="none" style={{ color: "#ffffff" }}>
                  ALL
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              spacing={2}
              alignItems="center"
              direction="column"
            >
              <Grid zeroMinWidth item>
                <Typography variant="body1" style={{ color: "#ffffff" }}>
                  06.12.2018
                </Typography>
              </Grid>
              <Grid zeroMinWidth item style={{ width: "100%" }}>
                <Grid container direction="column" spacing={2}>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents+1.png"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid container direction="column">
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Design Feedback
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Grid container spacing={1}>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <IconButton
                                      style={{
                                        paddingTop: "0px",
                                        paddingBottom: "0px",
                                        color: "#ffffff",
                                        paddingRight: "0px",
                                        paddingLeft: "0px",
                                      }}
                                    >
                                      <MinimizeOutlined
                                        style={{
                                          color: "#E51766",
                                          fontSize: "15px",
                                          paddingBottom: "8px",
                                        }}
                                      />
                                    </IconButton>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <img
                                      src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                                      style={{ width: "9px", height: "10px" }}
                                    ></img>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <i
                                      className="fas fa-dollar-sign"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        fontSize: "12px",
                                      }}
                                    ></i>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <IconButton
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: "#D8D8D8",
                            paddingRight: "0px",
                            paddingLeft: "25px",
                          }}
                        >
                          <KeyboardArrowRightOutlined
                            style={{ fontSize: "40px" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents2.png"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid container direction="column">
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Help with code review
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Grid container>
                              <Grid zeroMinWidth item>
                                <Grid container spacing={1}>
                                  <Grid zeroMinWidth item>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <IconButton
                                          style={{
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            color: "#ffffff",
                                            paddingRight: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <AddOutlined
                                            style={{
                                              color: "#94FFE9",
                                              fontSize: "15px",
                                            }}
                                          />
                                        </IconButton>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <img
                                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                                          style={{
                                            width: "9px",
                                            height: "10px",
                                          }}
                                        ></img>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          color="textPrimary"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            paddingTop: "3px",
                                          }}
                                        >
                                          155
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <i
                                          className="fas fa-dollar-sign"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            fontSize: "12px",
                                          }}
                                        ></i>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          color="textPrimary"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            paddingTop: "3px",
                                          }}
                                        >
                                          155
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid zeroMinWidth item />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <IconButton
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: "#D8D8D8",
                            paddingRight: "0px",
                            paddingLeft: "25px",
                          }}
                        >
                          <KeyboardArrowRightOutlined
                            style={{ fontSize: "40px" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents3.png"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid container direction="column">
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Help with code review
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Grid container>
                              <Grid zeroMinWidth item>
                                <Grid container spacing={1}>
                                  <Grid zeroMinWidth item>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <IconButton
                                          style={{
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            color: "#ffffff",
                                            paddingRight: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <AddOutlined
                                            style={{
                                              color: "#94FFE9",
                                              fontSize: "15px",
                                            }}
                                          />
                                        </IconButton>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <img
                                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                                          style={{
                                            width: "9px",
                                            height: "10px",
                                          }}
                                        ></img>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          color="textPrimary"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            paddingTop: "3px",
                                          }}
                                        >
                                          155
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <i
                                          className="fas fa-dollar-sign"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            fontSize: "12px",
                                          }}
                                        ></i>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          color="textPrimary"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            paddingTop: "3px",
                                          }}
                                        >
                                          155
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid zeroMinWidth item />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <IconButton
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: "#D8D8D8",
                            paddingRight: "0px",
                            paddingLeft: "25px",
                          }}
                        >
                          <KeyboardArrowRightOutlined
                            style={{ fontSize: "40px" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              spacing={2}
              alignItems="center"
              direction="column"
            >
              <Grid zeroMinWidth item>
                <Typography variant="body1" style={{ color: "#ffffff" }}>
                  05.12.2018
                </Typography>
              </Grid>
              <Grid zeroMinWidth item style={{ width: "100%" }}>
                <Grid container direction="column" spacing={2}>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Tooploox_Logo.png"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid container direction="column">
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Live Insurance
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Grid container spacing={1}>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <IconButton
                                      style={{
                                        paddingTop: "0px",
                                        paddingBottom: "0px",
                                        color: "#ffffff",
                                        paddingRight: "0px",
                                        paddingLeft: "0px",
                                      }}
                                    >
                                      <MinimizeOutlined
                                        style={{
                                          color: "#E51766",
                                          fontSize: "15px",
                                          paddingBottom: "8px",
                                        }}
                                      />
                                    </IconButton>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <img
                                      src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                                      style={{ width: "9px", height: "10px" }}
                                    ></img>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <i
                                      className="fas fa-dollar-sign"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        fontSize: "12px",
                                      }}
                                    ></i>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <IconButton
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: "#D8D8D8",
                            paddingRight: "0px",
                            paddingLeft: "25px",
                          }}
                        >
                          <KeyboardArrowRightOutlined
                            style={{ fontSize: "40px" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Tooploox_Logo.png"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid container direction="column">
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Monthly Bonus
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Grid container>
                              <Grid zeroMinWidth item>
                                <Grid container spacing={1}>
                                  <Grid zeroMinWidth item>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <IconButton
                                          style={{
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            color: "#ffffff",
                                            paddingRight: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <AddOutlined
                                            style={{
                                              color: "#94FFE9",
                                              fontSize: "15px",
                                            }}
                                          />
                                        </IconButton>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <img
                                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                                          style={{
                                            width: "9px",
                                            height: "10px",
                                          }}
                                        ></img>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          color="textPrimary"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            paddingTop: "3px",
                                          }}
                                        >
                                          155
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <i
                                          className="fas fa-dollar-sign"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            fontSize: "12px",
                                          }}
                                        ></i>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          color="textPrimary"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            paddingTop: "3px",
                                          }}
                                        >
                                          155
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid zeroMinWidth item />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <IconButton
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: "#D8D8D8",
                            paddingRight: "0px",
                            paddingLeft: "25px",
                          }}
                        >
                          <KeyboardArrowRightOutlined
                            style={{ fontSize: "40px" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents+1.png"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid container direction="column">
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Help with code review
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Grid container>
                              <Grid zeroMinWidth item>
                                <Grid container spacing={1}>
                                  <Grid zeroMinWidth item>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <IconButton
                                          style={{
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            color: "#ffffff",
                                            paddingRight: "0px",
                                            paddingLeft: "0px",
                                          }}
                                        >
                                          <AddOutlined
                                            style={{
                                              color: "#94FFE9",
                                              fontSize: "15px",
                                            }}
                                          />
                                        </IconButton>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <img
                                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                                          style={{
                                            width: "9px",
                                            height: "10px",
                                          }}
                                        ></img>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          color="textPrimary"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            paddingTop: "3px",
                                          }}
                                        >
                                          155
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <i
                                          className="fas fa-dollar-sign"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            fontSize: "12px",
                                          }}
                                        ></i>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          color="textPrimary"
                                          style={{
                                            color: "rgba(255,255,255,0.94)",
                                            paddingTop: "3px",
                                          }}
                                        >
                                          155
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid zeroMinWidth item />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <IconButton
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: "#D8D8D8",
                            paddingRight: "0px",
                            paddingLeft: "25px",
                          }}
                        >
                          <KeyboardArrowRightOutlined
                            style={{ fontSize: "40px" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Tooploox_Logo.png"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid container direction="column">
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Multisport Card
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Grid container spacing={1}>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <IconButton
                                      style={{
                                        paddingTop: "0px",
                                        paddingBottom: "0px",
                                        color: "#ffffff",
                                        paddingRight: "0px",
                                        paddingLeft: "0px",
                                      }}
                                    >
                                      <MinimizeOutlined
                                        style={{
                                          color: "#E51766",
                                          fontSize: "15px",
                                          paddingBottom: "8px",
                                        }}
                                      />
                                    </IconButton>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <img
                                      src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                                      style={{ width: "9px", height: "10px" }}
                                    ></img>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <i
                                      className="fas fa-dollar-sign"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        fontSize: "12px",
                                      }}
                                    ></i>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <IconButton
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: "#D8D8D8",
                            paddingRight: "0px",
                            paddingLeft: "25px",
                          }}
                        >
                          <KeyboardArrowRightOutlined
                            style={{ fontSize: "40px" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#CECED2",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{ width: "375px", backgroundColor: "#0D0D21", height: "812px" }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
              style={{ paddingTop: "20px" }}
            >
              <Grid zeroMinWidth item>
                <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                  <MenuOutlined />
                </IconButton>
              </Grid>
              <Grid zeroMinWidth item />
              <Grid zeroMinWidth item />
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container alignItems="flex-end" justify="space-between">
              <Grid zeroMinWidth item>
                <Grid container direction="column">
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      align="left"
                      style={{ color: "rgba(255,255,255,0.73)" }}
                    >
                      Current Balance
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid
                      container
                      alignContent="center"
                      spacing={1}
                      alignItems="center"
                      direction="row"
                    >
                      <Grid zeroMinWidth item style={{ marginTop: "-2px" }}>
                        <img
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                          style={{
                            width: "25px",
                            paddingTop: "7px",
                            height: "25px",
                          }}
                        ></img>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="h4"
                          color="textPrimary"
                          style={{ color: "rgba(255,255,255,0.93)" }}
                        >
                          9,258
                        </Typography>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          style={{
                            color: "rgba(255,255,255,0.73)",
                            paddingTop: "8px",
                          }}
                        >
                          ($925)
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <IconButton
                  size="small"
                  style={{
                    color: "rgba(255,255,255,0.73)",
                    paddingBottom: "5px",
                    paddingRight: "0px",
                  }}
                >
                  <CardGiftcardOutlined
                    fontSize="small"
                    style={{ marginRight: "5px" }}
                  />
                  February
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container direction="column" spacing={2}>
              <Grid zeroMinWidth item>
                <img
                  src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Graph.png"
                  style={{ width: "100%" }}
                ></img>
              </Grid>
              <Grid zeroMinWidth item style={{ width: "100%" }}>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <Button
                      style={{
                        backgroundColor: "#3247E5",
                        borderRadius: "20px",
                        textTransform: "none",
                        color: "#ffffff",
                        paddingRight: "40px",
                        paddingLeft: "40px",
                      }}
                    >
                      Send
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Button
                      style={{
                        backgroundColor: "#16162B",
                        borderRadius: "20px",
                        textTransform: "none",
                        color: "#ffffff",
                        paddingLeft: "60px",
                        paddingRight: "60px",
                      }}
                    >
                      Earn
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              spacing={1}
              justify="center"
              direction="column"
              style={{ width: "100%" }}
            >
              <Grid zeroMinWidth item>
                <Grid container justify="space-between" direction="row">
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      style={{ color: "#ffffff" }}
                    >
                      Market
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Button style={{ color: "#ffffff", textTransform: "none" }}>
                      View All
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item style={{ width: "100%" }}>
                <Grid container direction="row" style={{ width: "100%" }}>
                  <Grid zeroMinWidth item>
                    <Card style={{ backgroundColor: "#16162B", width: "100%" }}>
                      <CardHeader
                        title="Subscriptions"
                        disableTypography
                        style={{
                          paddingBottom: "0px",
                          fontSize: "20px",
                          paddingTop: "10px",
                          color: "#ffffff",
                          fontWeight: "600",
                          textAlign: "left",
                        }}
                      />
                      <CardContent style={{ paddingTop: "5px" }}>
                        <Typography
                          variant="body2"
                          align="left"
                          style={{ color: "rgba(255,255,255,0.73)" }}
                        >
                          Here you will find Spotify, Zign, Turbo Pluralsight,
                          Skillshare and many more!
                        </Typography>
                      </CardContent>
                      <CardActions
                        style={{
                          paddingTop: "0px",
                          paddingBottom: "0px",
                          position: "relative",
                        }}
                      >
                        <IconButton
                          style={{
                            position: "absolute",
                            right: "10px",
                            color: "#ffffff",
                            bottom: "25px",
                          }}
                        >
                          <ArrowForwardOutlined />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container direction="column" spacing={1}>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      style={{ color: "#ffffff" }}
                    >
                      Transactions History
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Button style={{ color: "#ffffff", textTransform: "none" }}>
                      View All
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid container direction="column" spacing={2}>
                  <Grid zeroMinWidth item>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Tooploox_Logo.png"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid container direction="column">
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Monthly Bonus
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Grid container spacing={1}>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <IconButton
                                      style={{
                                        paddingTop: "0px",
                                        paddingBottom: "0px",
                                        color: "#ffffff",
                                        paddingRight: "0px",
                                        paddingLeft: "0px",
                                      }}
                                    >
                                      <AddOutlined
                                        style={{
                                          color: "#94FFE9",
                                          fontSize: "15px",
                                        }}
                                      />
                                    </IconButton>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <img
                                      src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                                      style={{ width: "9px", height: "10px" }}
                                    ></img>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <i
                                      className="fas fa-dollar-sign"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        fontSize: "12px",
                                      }}
                                    ></i>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <IconButton
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: "#D8D8D8",
                            paddingRight: "0px",
                            paddingLeft: "25px",
                          }}
                        >
                          <KeyboardArrowRightOutlined
                            style={{ fontSize: "40px" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Tooploox_Logo.png"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid container direction="column">
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Life Insurance
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Grid container spacing={1}>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <IconButton
                                      style={{
                                        paddingTop: "0px",
                                        paddingBottom: "0px",
                                        color: "#ffffff",
                                        paddingRight: "0px",
                                        paddingLeft: "0px",
                                      }}
                                    >
                                      <MinimizeOutlined
                                        style={{
                                          color: "#E51766",
                                          fontSize: "15px",
                                          paddingBottom: "8px",
                                        }}
                                      />
                                    </IconButton>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <img
                                      src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                                      style={{ width: "9px", height: "10px" }}
                                    ></img>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid zeroMinWidth item>
                                <Grid
                                  container
                                  alignContent="center"
                                  alignItems="center"
                                  direction="row"
                                >
                                  <Grid zeroMinWidth item>
                                    <i
                                      className="fas fa-dollar-sign"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        fontSize: "12px",
                                      }}
                                    ></i>
                                  </Grid>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "rgba(255,255,255,0.94)",
                                        paddingTop: "3px",
                                      }}
                                    >
                                      155
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <IconButton
                          style={{
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            color: "#D8D8D8",
                            paddingRight: "0px",
                            paddingLeft: "25px",
                          }}
                        >
                          <KeyboardArrowRightOutlined
                            style={{ fontSize: "40px" }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#CECED2",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{ width: "375px", backgroundColor: "#0D0D21", height: "812px" }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
              style={{ paddingTop: "20px" }}
            >
              <Grid zeroMinWidth item>
                <IconButton style={{ padding: "0px" }}>
                  <ArrowBackOutlined style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ color: "#ffffff" }}>
                  Search
                </Typography>
              </Grid>
              <Grid zeroMinWidth item />
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <Button
                  style={{
                    backgroundColor: "#3247E5",
                    borderRadius: "20px",
                    textTransform: "none",
                    color: "#ffffff",
                    paddingRight: "40px",
                    paddingLeft: "40px",
                  }}
                >
                  Date Range
                </Button>
              </Grid>
              <Grid zeroMinWidth item>
                <Button
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "rgba(238,238,238,0.2)",
                    textTransform: "none",
                    color: "#ffffff",
                    paddingRight: "55px",
                    paddingLeft: "55px",
                  }}
                >
                  Period
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container justify="space-between" direction="row">
              <Grid zeroMinWidth item xs={5}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      align="left"
                      style={{ color: "#ffffff" }}
                    >
                      From
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <input
                      type="date"
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        background: "none",
                      }}
                    ></input>
                    <Divider
                      orientation="horizontal"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.30)",
                        marginTop: "5px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item xs={5}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      align="left"
                      style={{ color: "#ffffff" }}
                    >
                      To
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <input
                      type="date"
                      style={{
                        border: "none",
                        outline: "none",
                        color: "#ffffff",
                        background: "none",
                      }}
                    ></input>
                    <Divider
                      orientation="horizontal"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.30)",
                        marginTop: "5px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container direction="column" spacing={1}>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  align="left"
                  style={{ color: "#ffffff" }}
                >
                  Keywords
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <input
                  placeholder="Enter transaction keywords, separated by space"
                  style={{
                    width: "100%",
                    border: "none",
                    fontSize: "15px",
                    outline: "none",
                    color: "#ffffff",
                    background: "none",
                  }}
                ></input>
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.30)",
                    marginTop: "3px",
                    height: "2px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container direction="column" spacing={1}>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  align="left"
                  style={{ color: "#ffffff" }}
                >
                  Transaction Types
                </Typography>
              </Grid>
              <Grid zeroMinWidth item style={{ width: "100%" }}>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <Grid container spacing={1} direction="row">
                      <Grid zeroMinWidth item>
                        <IconButton
                          style={{
                            backgroundColor: "#3247E5",
                            borderRadius: "50px",
                            paddingTop: "7px",
                            color: "#ffffff",
                            paddingLeft: "15px",
                            fontSize: "15px",
                            paddingBottom: "7px",
                            paddingRight: "15px",
                          }}
                        >
                          Transfers
                          <CloseOutlined
                            style={{
                              color: "#ffffff",
                              fontSize: "15px",
                              paddingLeft: "20px",
                            }}
                          />
                        </IconButton>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <IconButton
                          style={{
                            backgroundColor: "#3247E5",
                            borderRadius: "50px",
                            paddingTop: "7px",
                            color: "#ffffff",
                            paddingLeft: "15px",
                            fontSize: "15px",
                            paddingBottom: "7px",
                            paddingRight: "15px",
                          }}
                        >
                          Purchases
                          <CloseOutlined
                            style={{
                              color: "#ffffff",
                              fontSize: "15px",
                              paddingLeft: "20px",
                            }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <KeyboardArrowDownOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.30)",
                    marginTop: "5px",
                    height: "2px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container spacing={3} justify="space-between" direction="row">
              <Grid zeroMinWidth item style={{ width: "50%" }}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      align="left"
                      style={{ color: "#ffffff" }}
                    >
                      Sum Min
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        paddingRight: "5px",
                        paddingLeft: "0px",
                      }}
                    >
                      <CloseOutlined style={{ fontSize: "15px" }} />
                    </IconButton>
                    <input
                      placeholder="Minimum Sum"
                      style={{
                        border: "none",
                        width: "70%",
                        fontSize: "15px",
                        outline: "none",
                        background: "none",
                      }}
                    ></input>
                    <Divider
                      orientation="horizontal"
                      style={{ backgroundColor: "rgba(255,255,255,0.30)" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item style={{ width: "50%" }}>
                <Grid container direction="column" spacing={1}>
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      align="left"
                      style={{ color: "#ffffff" }}
                    >
                      Sum Max
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        paddingRight: "5px",
                        paddingLeft: "0px",
                      }}
                    >
                      <CloseOutlined style={{ fontSize: "15px" }} />
                    </IconButton>
                    <input
                      placeholder="Maximum Sum"
                      style={{
                        border: "none",
                        width: "70%",
                        fontSize: "15px",
                        outline: "none",
                        background: "none",
                      }}
                    ></input>
                    <Divider
                      orientation="horizontal"
                      style={{ backgroundColor: "rgba(255,255,255,0.30)" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            zeroMinWidth
            item
            style={{ width: "100%", paddingTop: "100px" }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              direction="row"
              style={{ backgroundColor: "#3247E5", borderRadius: "50px" }}
            >
              <Grid zeroMinWidth item>
                <Button
                  size="large"
                  style={{ color: "#ffffff", textTransform: "none" }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#CECED2",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{ width: "375px", backgroundColor: "#0D0D21", height: "812px" }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
              style={{ paddingTop: "20px" }}
            >
              <Grid zeroMinWidth item>
                <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                  <CloseOutlined />
                </IconButton>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ color: "#ffffff" }}>
                  Market
                </Typography>
              </Grid>
              <Grid zeroMinWidth item />
            </Grid>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              direction="row"
              style={{ paddingTop: "20px" }}
            >
              <Grid zeroMinWidth item>
                <Typography
                  variant="body2"
                  align="center"
                  style={{ color: "rgba(255,255,255,0.57)" }}
                >
                  Here you can spend all the PLX you’ve earnt. Choose wisely and
                  have fun!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container direction="column">
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                >
                  <Grid zeroMinWidth item xs={2}>
                    <img src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Heart1.png"></img>
                  </Grid>
                  <Grid zeroMinWidth item xs={8}>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      align="left"
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Get Extra Holidays
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item xs={2}>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        marginLeft: "10px",
                        paddingRight: "0px",
                      }}
                    >
                      <KeyboardArrowRightOutlined
                        style={{ color: "#D8D8D8", fontSize: "45px" }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                >
                  <Grid zeroMinWidth item xs={2}>
                    <img src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Heart2.png"></img>
                  </Grid>
                  <Grid zeroMinWidth item xs={8}>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      align="left"
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Get Extra Learning Time
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item xs={2}>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        marginLeft: "10px",
                        paddingRight: "0px",
                      }}
                    >
                      <KeyboardArrowRightOutlined
                        style={{ color: "#D8D8D8", fontSize: "45px" }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                >
                  <Grid zeroMinWidth item xs={2}>
                    <img src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Heart3.png"></img>
                  </Grid>
                  <Grid zeroMinWidth item xs={8}>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      align="left"
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Support Charity
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item xs={2}>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        marginLeft: "10px",
                        paddingRight: "0px",
                      }}
                    >
                      <KeyboardArrowRightOutlined
                        style={{ color: "#D8D8D8", fontSize: "45px" }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  justify="space-between"
                  direction="row"
                >
                  <Grid zeroMinWidth item xs={2}>
                    <img src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Heart4.png"></img>
                  </Grid>
                  <Grid zeroMinWidth item xs={8}>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      align="left"
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Subscriptions
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item xs={2}>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        marginLeft: "10px",
                        paddingRight: "0px",
                      }}
                    >
                      <KeyboardArrowRightOutlined
                        style={{ color: "#D8D8D8", fontSize: "45px" }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#CECED2",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{
          width: "375px",
          backgroundColor: "#0D0D21",
          position: "relative",
          height: "812px",
        }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
              style={{ paddingTop: "20px" }}
            >
              <Grid zeroMinWidth item>
                <IconButton style={{ padding: "0px" }}>
                  <CloseOutlined style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ color: "#ffffff" }}>
                  Transfer Xoins
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <IconButton style={{ padding: "0px" }}>
                  <SearchOutlined style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container direction="column" spacing={2}>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  align="left"
                  style={{ color: "#ffffff" }}
                >
                  Recents
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={10}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item xs={2} style={{ color: "#ffffff" }}>
                    <Grid container direction="column" spacing={1}>
                      <Grid zeroMinWidth item>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents+1.png"
                          style={{ width: "60px", height: "60px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="subtitle2"
                          color="textPrimary"
                          align="center"
                          style={{ color: "#ffffff" }}
                        >
                          Terry Smith
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item xs={2}>
                    <Grid container direction="column" spacing={1}>
                      <Grid zeroMinWidth item>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents2.png"
                          style={{ width: "60px", height: "60px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="subtitle2"
                          color="textPrimary"
                          align="center"
                          style={{ color: "#ffffff" }}
                        >
                          Johny Whiner
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item xs={2}>
                    <Grid container direction="column" spacing={1}>
                      <Grid zeroMinWidth item>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents3.png"
                          style={{ width: "60px", height: "60px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="subtitle2"
                          color="textPrimary"
                          align="center"
                          style={{ color: "#ffffff" }}
                        >
                          Scarlet White
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container direction="column" spacing={2}>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  align="left"
                  style={{ color: "#ffffff" }}
                >
                  Your Contacts
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid container direction="column" spacing={2}>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/WuC4OUe.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          alignContent="flex-start"
                          direction="column"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Matt Amaranthus
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              M.Kormack@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/iNF2o1V.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          alignContent="flex-start"
                          direction="column"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Jessica Bulbylighter
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              j.b@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/QhiJxKj.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          alignContent="flex-start"
                          direction="column"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Monica Carlitas
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              m.c@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/xhVBWIH.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          alignContent="flex-start"
                          direction="column"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Terry Devilsaur
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              t.devilsaur@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/Sm4Vacj.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          alignContent="flex-start"
                          direction="column"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Johnathan Edison
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              j.e@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/WuC4OUe.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          alignContent="flex-start"
                          direction="column"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Matt Amaranthus
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              M.Kormack@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/iNF2o1V.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          alignContent="flex-start"
                          direction="column"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Jessica Bulbylighter
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              j.b@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#CECED2",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{
          width: "375px",
          backgroundColor: "#0D0D21",
          position: "relative",
          height: "812px",
        }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
              style={{ paddingTop: "20px" }}
            >
              <Grid zeroMinWidth item>
                <IconButton style={{ padding: "0px" }}>
                  <CloseOutlined style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography variant="h6" style={{ color: "#ffffff" }}>
                  Transfer Xoins
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <IconButton style={{ padding: "0px" }}>
                  <SearchOutlined style={{ color: "#ffffff" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container direction="column" spacing={2}>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  align="left"
                  style={{ color: "#ffffff" }}
                >
                  Recents
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={10}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item xs={2}>
                    <Grid container direction="column" spacing={1}>
                      <Grid zeroMinWidth item>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents+1.png"
                          style={{ width: "60px", height: "60px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="subtitle2"
                          color="textPrimary"
                          align="center"
                          style={{ color: "#ffffff" }}
                        >
                          Terry Smith
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item xs={2}>
                    <Grid container direction="column" spacing={1}>
                      <Grid zeroMinWidth item>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents2.png"
                          style={{ width: "60px", height: "60px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="subtitle2"
                          color="textPrimary"
                          align="center"
                          style={{ color: "#ffffff" }}
                        >
                          Johny Whiner
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item xs={2}>
                    <Grid container direction="column" spacing={1}>
                      <Grid zeroMinWidth item>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Recents3.png"
                          style={{ width: "60px", height: "60px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="subtitle2"
                          color="textPrimary"
                          align="center"
                          style={{ color: "#ffffff" }}
                        >
                          Scarlet White
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container direction="column" spacing={2}>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  align="left"
                  style={{ color: "#ffffff" }}
                >
                  Your Contacts
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid container direction="column" spacing={2}>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/WuC4OUe.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          direction="column"
                          alignContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Matt Amaranthus
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              M.Kormack@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/iNF2o1V.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          direction="column"
                          alignContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Jessica Bulbylighter
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              j.b@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/QhiJxKj.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          direction="column"
                          alignContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Monica Carlitas
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              m.c@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/xhVBWIH.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          direction="column"
                          alignContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Terry Devilsaur
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              t.devilsaur@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/Sm4Vacj.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          direction="column"
                          alignContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Johnathan Edison
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              j.e@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/WuC4OUe.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          direction="column"
                          alignContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Matt Amaranthus
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              M.Kormack@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid zeroMinWidth item style={{ width: "100%" }}>
                    <Grid
                      container
                      alignContent="center"
                      alignItems="center"
                      justify="space-between"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://i.imgur.com/iNF2o1V.jpg"
                          style={{ width: "45px", height: "45px" }}
                        ></Avatar>
                      </Grid>
                      <Grid zeroMinWidth item xs={8}>
                        <Grid
                          container
                          direction="column"
                          alignContent="flex-start"
                          alignItems="flex-start"
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="body1"
                              color="textPrimary"
                              align="left"
                              style={{ color: "#ffffff", fontSize: "18px" }}
                            >
                              Jessica Bulbylighter
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item style={{ marginTop: "-5px" }}>
                            <Typography
                              variant="caption"
                              color="textPrimary"
                              align="left"
                              style={{ color: "rgba(255,255,255,0.63)" }}
                            >
                              j.b@tooploox.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid zeroMinWidth item xs={2}>
                        <Avatar
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/XoinButton.png"
                          style={{
                            marginLeft: "18px",
                            width: "40px",
                            height: "40px",
                          }}
                        ></Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#CECED2",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center"
          direction="column"
          style={{
            backgroundColor: "#d4d4d7",
            borderRadius: "15px",
            left: "15px",
            bottom: "60px",
            width: "calc(100% - 30px)",
            position: "absolute",
            right: "15px",
          }}
        >
          <Grid zeroMinWidth item>
            <Typography
              variant="h6"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              Transfer
            </Typography>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Divider
              orientation="horizontal"
              style={{ backgroundColor: "rgba(0,0,0,0.57)", height: "1px" }}
            />
          </Grid>
          <Grid zeroMinWidth item>
            <Typography
              variant="h6"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              Request Loan
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{ width: "375px", backgroundColor: "#0D0D21", height: "812px" }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
              style={{ paddingTop: "20px" }}
            >
              <Grid zeroMinWidth item>
                <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                  <CloseOutlined />
                </IconButton>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  alignItems="center"
                  direction="column"
                >
                  <Grid zeroMinWidth item>
                    <Avatar
                      src="https://i.imgur.com/WuC4OUe.jpg"
                      style={{ width: "50px", height: "50px" }}
                    ></Avatar>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      style={{ color: "#ffffff" }}
                    >
                      Matt Amaranthus
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item />
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid container justify="space-between">
              <Grid zeroMinWidth item>
                <Grid container direction="column">
                  <Grid zeroMinWidth item>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      align="left"
                      style={{ color: "#ffffff" }}
                    >
                      XIN
                    </Typography>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <Grid
                      container
                      alignContent="center"
                      spacing={1}
                      alignItems="center"
                      direction="row"
                    >
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          style={{ color: "rgba(255,255,255,0.93)" }}
                        >
                          Balance
                        </Typography>
                      </Grid>
                      <Grid zeroMinWidth item style={{ marginTop: "-2px" }}>
                        <img
                          src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/CombinedShape.png"
                          style={{
                            width: "25px",
                            paddingTop: "7px",
                            height: "25px",
                          }}
                        ></img>
                      </Grid>
                      <Grid zeroMinWidth item>
                        <Typography
                          variant="body2"
                          color="textPrimary"
                          style={{ color: "rgba(255,255,255,0.93)" }}
                        >
                          9,258
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  style={{ color: "#ffffff" }}
                >
                  12.24
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-evenly"
              direction="row"
            >
              <Grid zeroMinWidth item style={{ marginLeft: "-40px" }}>
                <img src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Giphy.png"></img>
              </Grid>
              <Grid zeroMinWidth item>
                <Divider
                  orientation="vertical"
                  style={{
                    backgroundColor: "#979797",
                    width: "2px",
                    height: "40px",
                  }}
                />
              </Grid>
              <Grid zeroMinWidth item>
                <img src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/chat-46.png"></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item>
            <Grid container>
              <Grid zeroMinWidth item>
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#3247E5",
                    borderRadius: "0px",
                    width: "375px",
                    textTransform: "none",
                    color: "#ffffff",
                  }}
                >
                  Send
                </Button>
              </Grid>
              <Grid zeroMinWidth item style={{ width: "100%" }}>
                <Grid
                  container
                  direction="row"
                  spacing={1}
                  style={{ padding: "10px" }}
                >
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        padding: "0px",
                        paddingTop: "7px",
                        display: "block",
                        width: "100%",
                        fontSize: "25px",
                        paddingBottom: "7px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        1
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        fontSize: "25px",
                        padding: "0px",
                        display: "block",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        2
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          marginTop: "-5px",
                          letterSpacing: "2px",
                        }}
                      >
                        ABC
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        fontSize: "25px",
                        padding: "0px",
                        display: "block",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        3
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          marginTop: "-5px",
                          letterSpacing: "2px",
                        }}
                      >
                        DEF
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        fontSize: "25px",
                        padding: "0px",
                        display: "block",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        4
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          marginTop: "-5px",
                          letterSpacing: "2px",
                        }}
                      >
                        GHI
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        fontSize: "25px",
                        padding: "0px",
                        display: "block",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        5
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          marginTop: "-5px",
                          letterSpacing: "2px",
                        }}
                      >
                        JKL
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        fontSize: "25px",
                        padding: "0px",
                        display: "block",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        6
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          marginTop: "-5px",
                          letterSpacing: "2px",
                        }}
                      >
                        MNO
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        fontSize: "25px",
                        padding: "0px",
                        display: "block",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        7
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          marginTop: "-5px",
                          letterSpacing: "2px",
                        }}
                      >
                        PQRST
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        fontSize: "25px",
                        padding: "0px",
                        display: "block",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        8
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          marginTop: "-5px",
                          letterSpacing: "2px",
                        }}
                      >
                        TUV
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(255,255,255,0.1)",
                        fontSize: "25px",
                        padding: "0px",
                        display: "block",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        9
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          marginTop: "-5px",
                          letterSpacing: "2px",
                        }}
                      >
                        WXYZ
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        backgroundColor: "#666666",
                        padding: "0px",
                        paddingTop: "10px",
                        display: "block",
                        width: "100%",
                        fontSize: "25px",
                        paddingBottom: "11px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-9px" }}
                      >
                        .
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid zeroMinWidth item xs={4}>
                    <Button
                      variant="text"
                      size="large"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        padding: "0px",
                        paddingTop: "7px",
                        display: "block",
                        width: "100%",
                        fontSize: "25px",
                        paddingBottom: "7px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        noWrap
                        align="center"
                        display="initial"
                        style={{ color: "#ffffff", marginTop: "-2px" }}
                      >
                        0
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid
                    zeroMinWidth
                    item
                    xs={4}
                    style={{ textAlign: "center" }}
                  >
                    <IconButton style={{ color: "#ffffff" }}>
                      <BackspaceOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#CECED2",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Container
        style={{ width: "375px", background: "#0D0D21", height: "812px" }}
      >
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="space-between"
          direction="column"
          style={{ height: "812px" }}
        >
          <Grid zeroMinWidth item style={{ width: "100%", paddingTop: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
            >
              <Grid zeroMinWidth item>
                <time style={{ color: "#ffffff" }}>9:41</time>
              </Grid>
              <Grid zeroMinWidth item>
                <Grid
                  container
                  alignContent="center"
                  spacing={1}
                  alignItems="center"
                  direction="row"
                >
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <SignalCellularAltOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton style={{ color: "#ffffff", padding: "0px" }}>
                      <WifiOutlined />
                    </IconButton>
                  </Grid>
                  <Grid zeroMinWidth item>
                    <IconButton
                      style={{
                        color: "#ffffff",
                        padding: "0px",
                        transform: "rotate(90deg)",
                      }}
                    >
                      <BatteryFullOutlined />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item>
            <Grid
              container
              alignContent="center"
              spacing={1}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Grid zeroMinWidth item>
                <img src="https://slashdiv-public.s3.us-east-2.amazonaws.com/wxem5zB1W/Coins.png"></img>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h5"
                  align="center"
                  color="textPrimary"
                  style={{ color: "#ffffff" }}
                >
                  Contgratulations!
                </Typography>
              </Grid>
              <Grid zeroMinWidth item>
                <Typography
                  variant="body2"
                  align="center"
                  color="textPrimary"
                  style={{ color: "rgba(255,255,255,0.83)" }}
                >
                  Transfer completed successfully. We’re glad you’re using Xoins
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid zeroMinWidth item style={{ width: "100%" }}>
            <Grid
              container
              alignContent="flex-start"
              direction="row"
              style={{ paddingBottom: "150px" }}
            >
              <Grid zeroMinWidth item>
                <Button
                  size="large"
                  style={{ color: "#ffffff", textTransform: "none" }}
                >
                  Back To Wallet
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="center"
              direction="row"
            >
              <Grid
                zeroMinWidth
                item
                style={{ width: "50%", paddingBottom: "10px" }}
              >
                <Divider
                  orientation="horizontal"
                  style={{
                    backgroundColor: "#252537",
                    borderRadius: "3px",
                    height: "6px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
    </div>
  );
}
export default SlashmobileMatUI;