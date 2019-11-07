import React, { Component } from 'react';
import MTypography from 'components/Typography';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
const { Text } = Typography;
const { Text: MText } = MTypography;
interface IState {
  loading: boolean;
}
export default class extends Component<any, IState> {
  state = {
    loading: false
  };
  render() {
    return (
      <div style={{ margin: 10 }}>
        <MTypography>
          <MText copyable={true}>54545</MText>
        </MTypography>
        <div style={{ marginTop: 10 }}>
          <Typography>
            <Text type="secondary">
              上传的视频尺寸过大时帮助中心和公告展示不佳上传的视频尺寸过大时帮助中心和公告展示不佳上传的视频尺寸过大时帮助中心和公告展示不佳上传的视频尺寸过大时帮助中心和公告展示不佳上传的视频尺寸过大时帮助中心和公告展示不佳上传的视频尺寸过大时帮助中心和公告展示不佳上传的视频尺寸过大时帮助中心和公告展示不佳上传的视频尺寸过大时帮助中心和公告展示不佳上传的视频尺寸过大时帮助中心和公告展示不佳上传的视频尺寸过大时帮助中心和公告展示不佳
            </Text>
          </Typography>
        </div>
      </div>
    );
  }
}
