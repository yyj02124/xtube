import { Box, Link, Typography } from "@mui/material";
import React from "react";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <Box width={220} mb={1} pl={2} borderBottom="1px solid #bbbbbb">
      <FooterLink contents="정보" href="https://www.youtube.com/about/" />
      <FooterLink contents="보도자료" href="https://www.youtube.com/about/" />
      <FooterLink contents="저작권" href="https://www.youtube.com/about/" />
      <FooterLink contents="문의하기" href="https://www.youtube.com/about/" />
      <FooterLink contents="크리에이터" href="https://www.youtube.com/about/" />
      <FooterLink contents="광고" href="https://www.youtube.com/about/" />
      <FooterLink contents="개발자" href="https://www.youtube.com/about/" />
      <br />
      <br />
      <FooterLink contents="약관" href="https://www.youtube.com/about/" />
      <FooterLink
        contents="개인정보처리방침"
        href="https://www.youtube.com/about/"
      />
      <FooterLink
        contents="정책 및 안전"
        href="https://www.youtube.com/about/"
      />
      <FooterLink
        contents="YouTube 작동의 원리"
        href="https://www.youtube.com/about/"
      />
      <FooterLink
        contents="새로운 기능 테스트 하기"
        href="https://www.youtube.com/about/"
      />
      <br />
      <br />
      <Typography ml={1} fontSize={8}>
        © 2022 Google LLC
      </Typography>
      <Typography ml={1} fontSize={8}>
        CEO: 선다 피차이
      </Typography>
      <Typography sx={{ whiteSpace: "normal" }} ml={1} fontSize={8}>
        주소: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
      </Typography>
      <Typography sx={{ whiteSpace: "normal" }} ml={1} fontSize={8}>
        전화: 080-822-1450(무료)
      </Typography>
    </Box>
  );
};

export default Footer;
