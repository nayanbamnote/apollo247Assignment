import React from "react";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";
import AddDoctorDialog from "./AddDoctorDialog";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className=" !sticky top-0 z-50"
      style={{
        background:
          "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box",
        padding: "0px",
        height: "102px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 10px 0px",
        position: "relative",
        margin: "0px",
        boxSizing: "border-box",
        fontWeight: 400,
      }}>
      <div
        style={{
          padding: "6px",
          maxWidth: "1275px",
          margin: "auto",
          justifyContent: "normal",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
          fontWeight: 400,
        }}>
        <div
          style={{
            paddingRight: "20px",
            width: "324px",
            justifyContent: "normal",
            display: "flex",
            alignItems: "center",
            margin: "0px",
            boxSizing: "border-box",
            fontWeight: 400,
          }}>
          <div
            style={{
              justifyContent: "normal",
              paddingRight: "20px",
              display: "flex",
              alignItems: "center",
              margin: "0px",
              padding: "0px 20px 0px 0px",
              boxSizing: "border-box",
              fontWeight: 400,
            }}>
            <Link
              href="/"
              style={{
                display: "block",
                height: "48px",
                textDecoration: "none solid rgb(18, 20, 20)",
                color: "rgb(18, 20, 20)",
                outline: "rgb(18, 20, 20) none 0px",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                fontWeight: 400,
              }}
              title="Home">
              <img
                src="https://images.apollo247.in/images/icons/apollo247.svg"
                title="Online Doctor Consultation &amp; Medicines"
                alt="Online Doctor Consultation &amp; Medicines"
                width="100%"
                height="100%"
                style={{
                  width: "70px",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 400,
                }}
              />
            </Link>
          </div>
          <div
            style={{
              width: "calc(100% - 90px)",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              fontWeight: 400,
            }}>
            <div
              style={{
                position: "relative",
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                fontWeight: 400,
              }}>
              <div
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}>
                <span
                  style={{
                    margin: "0px 8px 0px 0px",
                    padding: "0px",
                    boxSizing: "border-box",
                    fontWeight: 400,
                    height: "24px",
                    width: "24px",
                    marginRight: "8px",
                    flexShrink: 0,
                    cursor: "pointer",
                    overflow: "hidden",
                  }}>
                  <img
                    srcSet="https://images.apollo247.in/images/ic_location_new.svg?tr=q-40,w-50,dpr-1,c-at_max 50w, https://images.apollo247.in/images/ic_location_new.svg?tr=q-40,w-50,dpr-2,c-at_max 100w, https://images.apollo247.in/images/ic_location_new.svg?tr=q-40,w-50,dpr-3,c-at_max 150w, https://images.apollo247.in/images/ic_location_new.svg?tr=q-40,w-50,dpr-4,c-at_max 200w, https://images.apollo247.in/images/ic_location_new.svg?tr=q-40,w-50,dpr-5,c-at_max 250w, https://images.apollo247.in/images/ic_location_new.svg?tr=q-40,w-50,dpr-6,c-at_max 300w"
                    src="https://images.apollo247.in/images/ic_location_new.svg?tr=q-40,w-50,dpr-2,c-at_max 100w"
                    sizes="50px"
                    alt="chooseLocation"
                    width="24"
                    height="24"
                    loading="lazy"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontWeight: 400,
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </span>
                <div
                  style={{
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                    fontWeight: 400,
                    width: "calc(100% - 32px)",
                  }}>
                  <label
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "16px",
                      display: "block",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      color: "rgb(75, 74, 72)",
                      width: "90%",
                    }}>
                    Select Location
                  </label>
                  <div
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontWeight: 400,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      cursor: "pointer",
                    }}>
                    <p
                      style={{
                        fontWeight: 600,
                        margin: "0px",
                        padding: "0px",
                        boxSizing: "border-box",
                        lineHeight: "20px",
                        fontSize: "14px",
                        color: "rgb(18, 20, 20)",
                        cursor: "pointer",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}>
                      Select Address
                    </p>
                    <span
                      style={{
                        margin: "0px",
                        padding: "0px",
                        boxSizing: "border-box",
                        fontWeight: 400,
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        position: "relative",
                        borderRadius: "50%",
                        transform: "matrix(0, 1, -1, 0, 0, 0)",
                        transition: "0.2s ease-in-out",
                      }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: "628px",
            width: "calc(100% - 648px)",
            margin: "0px",
            padding: "0px",
            boxSizing: "border-box",
            fontWeight: 400,
          }}>
          <div
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              fontWeight: 400,
            }}>
            <div
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                fontWeight: 400,
                position: "relative",
              }}>
              <span
                style={{
                  height: "16px",
                  width: "16px",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 400,
                  left: "19px",
                  position: "absolute",
                  top: "20px",
                  fontSize: "16px",
                  transform: "matrix(1, 0, 0, 1, 0, -8)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                <img
                  srcSet="https://images.apollo247.in/images/ic_search_new.svg?tr=q-80,w-50,dpr-1,c-at_max 50w, https://images.apollo247.in/images/ic_search_new.svg?tr=q-80,w-50,dpr-2,c-at_max 100w, https://images.apollo247.in/images/ic_search_new.svg?tr=q-80,w-50,dpr-3,c-at_max 150w, https://images.apollo247.in/images/ic_search_new.svg?tr=q-80,w-50,dpr-4,c-at_max 200w, https://images.apollo247.in/images/ic_search_new.svg?tr=q-80,w-50,dpr-5,c-at_max 250w, https://images.apollo247.in/images/ic_search_new.svg?tr=q-80,w-50,dpr-6,c-at_max 300w"
                  src="https://images.apollo247.in/images/ic_search_new.svg?tr=q-40,w-50,dpr-2,c-at_max 100w"
                  sizes="50px"
                  alt="Search"
                  width="28"
                  height="28"
                  loading="lazy"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                    fontWeight: 400,
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </span>
              <input
                placeholder="Search Doctors, Specialities, Conditions etc."
                title="Search"
                style={{
                  borderColor: "rgb(190, 190, 187)",
                  height: "40px",
                  margin: "0px",
                  padding: "0px 16px 0px 60px",
                  boxSizing: "border-box",
                  fontWeight: 500,
                  background:
                    "rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box",
                  fontSize: "14px",
                  caretColor: "rgb(61, 136, 160)",
                  paddingLeft: "60px",
                  width: "100%",
                  color: "rgb(18, 20, 20)",
                  borderRadius: "8px",
                }}
              />
              
            </div>
            
            <div
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                fontWeight: 400,
                display: "flex",
                justifyContent: "space-between",
              }}></div>
           
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-7">Add Doctor</Button>
          </DialogTrigger>
          <AddDoctorDialog />
        </Dialog>
        <div
          style={{
            maxWidth: "324px",
            marginLeft: "auto",
            margin: "0px 0px 0px 211px",
            padding: "0px",
            boxSizing: "border-box",
            fontWeight: 400,
          }}>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "row",
              gap: "12px",
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              fontWeight: 400,
              listStyle: "outside none none",
            }}>
            <li
              style={{
                marginRight: "0px",
                marginLeft: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                position: "relative",
                cursor: "pointer",
                padding: "0px",
                boxSizing: "border-box",
                fontWeight: 400,
              }}>
              <div
                title="Login/SignUp"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 400,
                }}>
                <span
                  style={{
                    display: "none",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontFeatureSettings: "normal",
                    fontVariant: "normal",
                    textTransform: "none",
                    lineHeight: "24px",
                    WebkitFontSmoothing: "antialiased",
                    fontFamily: "icomoon",
                    height: "24px",
                    width: "24px",
                    fontSize: "24px",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    cursor: "pointer",
                    position: "relative",
                    flexShrink: 0,
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                  }}></span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    borderRadius: "8px",
                    border: "0.8px solid rgb(22, 93, 89)",
                    marginLeft: "10px",
                    cursor: "pointer",
                    height: "40px",
                    padding: "0px 12px 0px 16px",
                    minWidth: "103px",
                    margin: "0px 0px 0px 10px",
                    boxSizing: "border-box",
                    fontWeight: 400,
                  }}>
                  <span
                    style={{
                      color: "rgb(22, 93, 89)",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginRight: "12px",
                      margin: "0px 12px 0px 0px",
                      padding: "0px",
                      boxSizing: "border-box",
                    }}>
                    Login
                  </span>

                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontFeatureSettings: "normal",
                      fontVariant: "normal",
                      textTransform: "none",
                      lineHeight: "24px",
                      WebkitFontSmoothing: "antialiased",
                      fontFamily: "icomoon",
                      height: "24px",
                      width: "24px",
                      fontSize: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      cursor: "pointer",
                      position: "relative",
                      flexShrink: 0,
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                    }}>
                    <User />
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          borderTop: "0.8px solid rgb(231, 231, 229)",
          margin: "0px",
          padding: "0px",
          boxSizing: "border-box",
          fontWeight: 400,
        }}>
        <div
          style={{
            maxWidth: "1024px",
            margin: "auto",
            width: "100%",
            padding: "0px",
            boxSizing: "border-box",
            fontWeight: 400,
          }}>
          <ul
            style={{
              margin: "0px",
              padding: "10px 0px",
              boxSizing: "border-box",
              fontWeight: 400,
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              listStyle: "outside none none",
            }}>
            <li
              style={{
                listStyleType: "none",
                margin: "0px",
                padding: "2px",
                boxSizing: "border-box",
                fontWeight: 400,
                borderBottom: "1.6px solid rgb(255, 255, 255)",
              }}>
              <a
                href="https://www.apollopharmacy.in"
                style={{
                  textDecoration: "none solid rgb(18, 20, 20)",
                  color: "rgb(18, 20, 20)",
                  outline: "rgb(18, 20, 20) none 0px",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}>
                Buy Medicines
              </a>
            </li>
            <li
              style={{
                listStyleType: "none",
                margin: "0px",
                padding: "2px",
                boxSizing: "border-box",
                fontWeight: 400,
                borderBottom: "1.6px solid rgb(255, 255, 255)",
              }}>
              <Link
                href="/specialties"
                style={{
                  textDecoration: "none solid rgb(18, 20, 20)",
                  color: "rgb(18, 20, 20)",
                  outline: "rgb(18, 20, 20) none 0px",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}>
                Find Doctors
              </Link>
            </li>
            <li
              style={{
                listStyleType: "none",
                margin: "0px",
                padding: "2px",
                boxSizing: "border-box",
                fontWeight: 400,
                borderBottom: "1.6px solid rgb(255, 255, 255)",
              }}>
              <Link
                href="/lab-tests"
                style={{
                  textDecoration: "none solid rgb(18, 20, 20)",
                  color: "rgb(18, 20, 20)",
                  outline: "rgb(18, 20, 20) none 0px",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}>
                Lab Tests
              </Link>
            </li>
            <li
              style={{
                listStyleType: "none",
                margin: "0px",
                padding: "2px",
                boxSizing: "border-box",
                fontWeight: 400,
                borderBottom: "1.6px solid rgb(255, 255, 255)",
              }}>
              <Link
                href="/circle-landing"
                style={{
                  textDecoration: "none solid rgb(18, 20, 20)",
                  color: "rgb(18, 20, 20)",
                  outline: "rgb(18, 20, 20) none 0px",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}>
                Circle Membership
              </Link>
            </li>
            <li
              style={{
                listStyleType: "none",
                margin: "0px",
                padding: "2px",
                boxSizing: "border-box",
                fontWeight: 400,
                borderBottom: "1.6px solid rgb(255, 255, 255)",
              }}>
              <Link
                href="/guest-health-records"
                style={{
                  textDecoration: "none solid rgb(18, 20, 20)",
                  color: "rgb(18, 20, 20)",
                  outline: "rgb(18, 20, 20) none 0px",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}>
                Health Records
              </Link>
            </li>
            <li
              style={{
                listStyleType: "none",
                margin: "0px",
                padding: "2px",
                boxSizing: "border-box",
                fontWeight: 400,
                borderBottom: "1.6px solid rgb(255, 255, 255)",
              }}>
              <Link
                href="/apollo-super6-program"
                style={{
                  textDecoration: "none solid rgb(18, 20, 20)",
                  color: "rgb(18, 20, 20)",
                  outline: "rgb(18, 20, 20) none 0px",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}>
                Diabetes Reversal
              </Link>
            </li>
            <li
              style={{
                listStyleType: "none",
                margin: "0px",
                padding: "2px",
                boxSizing: "border-box",
                fontWeight: 400,
                borderBottom: "1.6px solid rgb(255, 255, 255)",
              }}>
              <a
                href="https://apollo247insurance.com/health-insurance"
                style={{
                  textDecoration: "none solid rgb(18, 20, 20)",
                  color: "rgb(18, 20, 20)",
                  outline: "rgb(18, 20, 20) none 0px",
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "20px",
                }}>
                Buy Insurance
                <div
                  style={{
                    fontWeight: 400,
                    borderRadius: 0,
                    height: "undefined",
                    padding: "undefined",
                    filter: "undefinedmargin:0px 0px 0px 2px",
                    boxSizing: "border-box",
                    marginLeft: "2px",
                    display: "inline",
                    width: "auto",
                    fontSize: "10px",
                    background:
                      "rgb(229, 249, 248) none repeat scroll 0% 0% / auto padding-box border-box",
                    color: "rgb(26, 80, 76)",
                    textTransform: "none",
                    lineHeight: "16px",
                    letterSpacing: "1px",
                    alignItems: "center",
                    margin: "0px 0px 0px 2px",
                  }}>
                  New
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            margin: "0px",
            padding: "0px",
            boxSizing: "border-box",
            fontWeight: 400,
          }}></div>
      </div>
    </div>
  );
};

export default Header;
