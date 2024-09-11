import React, {useContext, useEffect} from 'react'
import DefaultLayout from "../../components/layout/defaultlayout/DefaultLayout"
import BannerImg from "../../asstes/images/details01.jpg"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {t} from "i18next";
import LanguageContext from "../../context/LanguageProvider";
import {useDispatch, useSelector} from "react-redux";
import {buySaleGuideGetAction} from "./redux/buy-sale-guide/buySaleGuide.actions";
import {Skeleton} from "antd";
import {ENVIRONMENT} from "../../config/environment/environment";

function BuySellGuide() {
  const { language } = useContext(LanguageContext);
  let count = 0;
  const buySaleGuide = useSelector(
      (state) => state.buySaleGuideState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if(count == 0)
      { setTimeout(()=>{
        dispatch(buySaleGuideGetAction());
        count = count + 1;
      },500)
    }
  }, [count,language]);
  const buy_sale = buySaleGuide.buySaleGuideData?.data?.buy_and_sell;
  const loadings = buySaleGuide.loading;
  return (
    <div>
      <DefaultLayout>
        <div className='blog_deatils_area'>
          <img src={BannerImg} alt="" />
        </div>
        <div className='buy_sell_guide_area'>
          <Container>
            <Row>
              <Col sm={12} lg={12}>
                <div className='realHdr__text'>
                  <h3 > {t('real-estate-solutions')} </h3>
                  <p>{t('what-are-you-interested-in')}</p>
                </div>
              </Col>
              {loadings ?
                  <><Skeleton /></> :
                  <>
                    {buy_sale?.map((item, i) =>
                      <div className="col-sm-6 col-lg-6" key={i}>
                        <Link to={`/real-estate-solutions/${item.slug}`}>
                          <div className="popular-places">
                            <div className="popular-places-inner">
                              <div className="popular-places-overflow">
                                <div className="popular-places-photo">
                                    <img className="img-fluid w-100" src={ENVIRONMENT.FILE_URL + item.thumbnail} alt={language=='en'?item.title_en:item.title_bn} />
                                </div>
                                <div className="info">
                                  <h3>
                                    <Link to={`/real-estate-solutions/${item.slug}`}>
                                      {language=='en'?item.title_en:item.title_bn}
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                  )}
              </>}
            </Row>
          </Container>
        </div>
      </DefaultLayout>
    </div>
  )
}

export default BuySellGuide
