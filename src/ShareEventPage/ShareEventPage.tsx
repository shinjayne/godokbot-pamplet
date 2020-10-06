import React, {useRef, useState} from 'react';
import {ContentBody} from "../Components/ContentBody";
import DisplayGroup from "../Components/DisplayGroup/DisplayGroup";
// images
import memberCard from './membercard.jpg';
import smallMemberCard from './membercard.png';
import godokProfile from './godokprof.svg';
import CustomImage from "../Components/CustomImage";
import {Input, Select, Slider, Upload} from 'antd';
import {RcFile, UploadChangeParam} from 'antd/lib/upload';
import CustomButton from "../Components/Buttons/CustomButton";
import styled from "styled-components";
import {SliderValue} from 'antd/lib/slider';

import misang from './misang.jpg';
import misangRemove from './misang-remove.png';


import {UploadOutlined} from '@ant-design/icons';
import {ListCard} from "../Components/DisplayGroup/ListPart";
import {Company, companyImageMap} from "./enum";


import ResultPage from "./ResultPage";
import LogoLink from "../LogoLink";
import useGtag from "../useGtag";
import firebase from "firebase";
import DefaultHelmet from "../Helmet/DefaultHelmet";

interface IProps {
}


const ShareEventPage: React.FC<IProps> = () => {


  const gtag = useGtag();

  const [goResult, setGoResult] = useState(false);


  const [userImageUrl, setUserImageUrl] = useState<string>(godokProfile);

  const [name, setName] = useState("취준봇");
  const [engName, setEngName] = useState("Godok Bot");
  const [department, setDepartment] = useState("기획/전략 2팀");
  const [grade, setGrade] = useState("사원");

  const [company, setCompany] = useState<Company>(Company.samsung);


  const [size, setSize] = useState(200);
  const [top, setTop] = useState(-20);
  const [left, setLeft] = useState(0);


  function onImageChange(params: UploadChangeParam) {
    setUserImageUrl(URL.createObjectURL(params.file.originFileObj));

    gtag('event', 'add_to_cart', {});
  }

  function validateImage(file: RcFile) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    return isJpgOrPng;
  }

  function onSizeChange(value: SliderValue) {
    setSize(value as number);
  }

  function onTopChange(value: SliderValue) {
    setTop(value as number);
  }

  function onLeftChange(value: SliderValue) {
    setLeft(value as number);
  }


  function handleCompanyChange(value: Company) {
    setCompany(value);
  }


  async function goResultPage() {
    setGoResult(true);


    gtag('event', 'begin_checkout', {});
  }


  const ref = useRef<HTMLDivElement>(null);

  if (goResult) {
    return (
      <ResultPage company={company} name={name} engName={engName} department={department} grade={grade}
                  userImageUrl={userImageUrl} size={size} top={top} left={left}/>
    )
  }


  return (
    <>
      <DefaultHelmet/>
      <ContentBody>

        <DisplayGroup
          displaySectionStyle={{paddingTop: 15}}
          reversed
          desc={<>
            <LogoLink/>
            <div
              style={{
                fontWeight: 1000,
                fontSize: 30,
                margin: "0 0 3px 0",


                fontFamily: 'Jalnan',
                boxSizing: "border-box",
                width: "100%",
                color: "white",
              }}
            >
              고독한 사원증
            </div>


            <div style={{width: '100%'}}>
              나만의 합격기원 사원증을 만들어보세요!
              <br/>
              <span style={{fontSize: 11}}> (PC Chrome 환경을 추천합니다)</span>
            </div>


            <CustomImage imgSrc={smallMemberCard}/>

            <FormItem>
              이름
              <Input onChange={event => {
                setName(event.target.value);
                gtag('event', 'start_form', {
                  'event_category': 'engagement',
                });
              }} defaultValue={name}/>
            </FormItem>
            <FormItem>
              영문명
              <Input onChange={event => setEngName(event.target.value)} defaultValue={engName}/>
            </FormItem>
            <FormItem>
              희망 부서
              <Input onChange={event => setDepartment(event.target.value)} defaultValue={department}/>
            </FormItem>
            <FormItem>
              직급
              <Input onChange={event => setGrade(event.target.value)} defaultValue={grade}/>
            </FormItem>
            <FormItem>
              사원증 사진 등록
              <ListCard>
                1. 본인이 나온 사진의 배경을 제거합니다.

                <div style={{marginTop: 20, width: '100%', display: "flex", justifyContent: 'center'}}>
                  <img src={misang} width={80} height={110}/>
                  <img src={misangRemove} width={80} height={110}/>


                </div>

                <CustomButton style={{width: 280}} type={"primary"}
                              onClick={() => window.open("https://www.remove.bg/ko/upload")}>
                  이미지 배경
                  제거하고 오기
                </CustomButton>
              </ListCard>
              <ListCard>
                2. 사원증 사진을 업로드합니다.
                <div style={{width: '100%', textAlign: "center"}}>
                  <Upload
                    // listType="picture-card"
                    showUploadList={false}
                    beforeUpload={validateImage}
                    onChange={onImageChange}
                  >

                    <CustomButton style={{width: 280, height: 37}}><UploadOutlined style={{marginRight: 10}}/> 사원증 사진
                      업로드
                    </CustomButton>


                  </Upload>
                </div>
              </ListCard>

            </FormItem>

            <FormItem>
              기업 선택

              <div style={{width: '100%', display: 'block'}}>
                <Select defaultValue={company} onChange={handleCompanyChange} style={{width: '100%'}}>
                  <Select.Option value={Company.hynix}>
                    SK하이닉스
                  </Select.Option>
                  <Select.Option value={Company.samsung}>
                    삼성전자
                  </Select.Option>
                  <Select.Option value={Company.none}>
                    기업 로고 없음
                  </Select.Option>
                </Select>
              </div>
            </FormItem>

          </>}/>


        <div ref={ref}>
          <DisplayGroup
            // compact={true}
            displaySectionStyle={{marginBottom: 0}}
            strongCopy={'아래에서 이미지 크기와 위치를 조정 후, 완성하세요!'}
            desc={<>
              <CustomMemberCard id={'result'}>
                <CustomImage
                  style={{
                    marginTop: 130,
                    minHeight: 120,
                  }}
                  useZoom={false} defaultHeight={120} imgSrc={companyImageMap[company]}/>
                <MemberName>
                  {name}
                </MemberName>
                <MemberSubName>
                  {engName}
                </MemberSubName>
                <MemberDirectory>
                  {department} <br/>
                  {grade}
                </MemberDirectory>

                {userImageUrl && (
                  <MemberImageContainer>
                    <MemberImage
                      imageUrl={userImageUrl}
                      width={String(size)}
                      style={{
                        backgroundPositionY: `${top}px`,
                        position: 'relative',
                        left: left,
                      }}
                    />
                  </MemberImageContainer>
                )}

              </CustomMemberCard>
            </>}
          />
        </div>

        <DisplayGroup

          reversed={true}
          displaySectionStyle={{paddingTop: 5}}
          desc={<>

            <span style={{marginBottom: 15, fontWeight: 600}}>이미지 조절하기</span>


            <div style={{display: "flex", width: '100%'}}>
              <SliderSpan>사이즈</SliderSpan>
              <SliderContainer>
                <Slider
                  min={0}
                  max={200}
                  defaultValue={size}
                  onChange={onSizeChange}
                />
              </SliderContainer>
            </div>


            <div style={{display: "flex", width: '100%'}}>
              <SliderSpan>상하</SliderSpan>
              <SliderContainer>
                <Slider

                  min={-120}
                  max={120}
                  defaultValue={top}
                  onChange={onTopChange}
                />
              </SliderContainer>
            </div>

            <div style={{display: "flex", width: '100%'}}>
              <SliderSpan>좌우</SliderSpan>
              <SliderContainer>
                <Slider

                  min={-50}
                  max={50}
                  defaultValue={left}
                  onChange={onLeftChange}
                />
              </SliderContainer>
            </div>


            <CustomButton onClick={goResultPage}> 완성하기 </CustomButton>
          </>}
        />
      </ContentBody>
    </>
  );
};

const CustomMemberCard = styled.div`
  background-image: url(${memberCard});
  width: 100%;
  height: 600px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 60%;
  color: black;
 
 text-align: center;
  display: flex;
  flex-direction: column;
 
 
`;

const MemberName = styled.div`
  
  margin-top: 20px;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: 10px;
  margin-right: -10px;
`;

const MemberSubName = styled.div`
 
  font-size: 15px;

`;

const MemberDirectory = styled.div`
margin-top: 5px;
line-height: 1.5;
font-size: 12px;

`;

const MemberImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MemberImage = styled.div<{ imageUrl: string, width: string }>`
  background-image: url(${(props) => props.imageUrl});
  height: 133.3px;
  width: ${(props) => props.width}px;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  
`;

const FormItem = styled.div`
text-align: start;
width: 100%;
margin: 10px 0 10px 0;
`;

const SliderSpan = styled.span`
 width: 50px;
 padding-top: 5px;
 
 
`;
const SliderContainer = styled.div`
  display: block;
  width: 80%;
  height: 50px;
`;

export default ShareEventPage;

