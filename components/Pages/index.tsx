import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { time } from 'console';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  // let name = "weather"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", fontFamily: "font", fontSize: 20, color: "white" }}>
      <br-x />
      <Window style={{ minHeight: 563, margin: 10, width: "calc(100% - 50px)", backgroundImage: 'url("https://irmapserver.ir/research/43/weather.webp' ,  backgroundRepeat: "no-repeat" }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}

        <c-x>
          <br-x />
          <br-x />
          <br-x />
          <f-csb style={{ padding: "0 20px", width: "100%", color: "white", fontSize: 30 }}>
            <f-csb>WEATHER</f-csb>
            <f-csb>آب و هوا</f-csb>
          </f-csb>
          <f-cc style={{ padding: "0 50px", color: "white", fontSize:15 }}> {props.date} </f-cc>
            <f-cc style={{ padding: "0 50px", color: "white",fontSize:15 }}>{props.time}</f-cc>
          <br-x />
          <br-x />
          <br-x />
          <f-cse>
            <f-cc style={{ height: 100, width: 300, backgroundColor: ("#00000082"), borderRadius: 20 }}>
              <img src="https://irmapserver.ir/research/43/temp%20%283%29.webp"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-3 />
              <span>Feels like: {props.feelslikec}°c </span>
            </f-cc>

            <f-cc style={{ height: 100, width: 300, backgroundColor: "#00000082", borderRadius: 20, direction: "rtl" }}>
              <img src="https://irmapserver.ir/research/43/temp%20%283%29.webp"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-3 />
              <f-cc>
                <f-14>درجه هوا:</f-14>
                <sp-3 />
                <f-14>c</f-14>
                <f-14>°</f-14>
                <f-14>{props.feelslikec}</f-14>
              </f-cc>
              <sp-3 />
            </f-cc>
          </f-cse>
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <f-cse>
            <f-cc style={{ height: 100, width: 300, backgroundColor: "#00000082", borderRadius: 20 }}>
              <img src="https://irmapserver.ir/research/43/humidity%20copy.webp"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-3 />
              <span>Humidity: {props.humidity} %RH </span>
            </f-cc>

            <f-cc style={{ height: 100, width: 300, backgroundColor: "#00000082", borderRadius: 20, direction: "rtl" }}>
              <img src="https://irmapserver.ir/research/43/humidity%20copy.webp"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-3 />
              <f-cc>
                <f-14>رطوبت هوا:</f-14>
                <sp-3 />
                <f-14>RH</f-14>
                <sp-4 />
                <f-14>%</f-14>
                <f-14>{props.humidity}</f-14>
              </f-cc>
              <sp-3 />
            </f-cc>
          </f-cse>
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <f-cse>
            <f-cc style={{ height: 100, width: 300, backgroundColor: "#00000082", borderRadius: 20 }}>
              <img src="https://irmapserver.ir/research/43/pressure%20copy.webp"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-3 />
              <span>Pressure: {props.pressure} </span>
            </f-cc>

            <f-cc style={{ height: 100, width: 300, backgroundColor: "#00000082", borderRadius: 20, direction: "rtl" }}>
              <img src="https://irmapserver.ir/research/43/pressure%20copy.webp"
                style={{ height: 30, objectFit: "contain" }} />
              <sp-3 />
              <f-cc>
                <f-14>فشار هوا:</f-14>
                <sp-3 />
                {/* <f-14>c</f-14> */}
                {/* <f-14>°</f-14> */}
                <f-14>{props.pressure}</f-14>
              </f-cc>
              <sp-3 />
            </f-cc>
          </f-cse>
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <f-cse style={{ width: "100%", color: "white", fontSize: 10 }}>
            <f-cc>BY ORDER OF TOURING TEAM</f-cc>
            <f-cc>تهیه شده توسط تیم پژوهشی تورینگ</f-cc>
          </f-cse>
          <br-x />
        </c-x>

        {/* <div style={{ direction: "ltr", fontFamily:"font", fontSize:20}}>
        <span>server Time: {props.time} </span> 
        <br/>
        <span>server Date: {props.date} </span> 
        <br/>
        <span>Feels like: {props.feelslikec} °c </span>
        <br/>
        <span>Humidity: {props.humidity} %RH </span>
        <br/>
         <span>Humidity: {props.humidity} %RH </span>
        <br/>
       
        </div> */}

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let data = await (await fetch("https://irmapserver.ir/research/api/weather")).json()

  let feelslikec = data.current_condition[0].FeelsLikeC
  let humidity = data.current_condition[0].humidity
  let pressure = data.current_condition[0].pressure

  let date = new Date().toLocaleDateString()
  let time = new Date().toLocaleTimeString()


  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        humidity,
        pressure,
        date,
        time
        // nlangs,
      })
    },
  }
}