import React, { useEffect, useState } from 'react'
import { Container, Content, List,  Text,  View } from 'native-base';
import {getArticles} from '../../service/api';
import { Alert, ActivityIndicator } from 'react-native';
import DataItem from '../../component/dataItem';
import ModalComponent from '../../component/modal';

export default  Tab2 = () => {

    const [newsData, setNewsData] = useState({
        isLoading:true,
        data:null,
        setModalVisible: false,
        modalArticleData: {}
    })

    const handleItemDataOnPress = (articleData) => {
        setNewsData({
            ...newsData,
            setModalVisible: true,
            modalArticleData: articleData
        })
    }

    const handleModalClose = () => {
        setNewsData({
            ...newsData,
            setModalVisible:false,
            modalArticleData: {}
        })
    }

    useEffect(()=>{
        getArticles('business').then(data => {
            setNewsData({
                isLoading:false,
                data: data
            }, error => {
                Alert.alert('Error', 'Something went wrong!');
            });
        })
    },[]);

    let view = newsData.isLoading ? (
        <View>
            <ActivityIndicator animating={newsData.isLoading} />
            <Text style={{marginTop:15}}>Please wait...</Text>
        </View>
    ) : (
        <List
            dataArray= {newsData.data}
            renderRow={(item)=> {
            return <DataItem onPress = {handleItemDataOnPress} data={item} />
         }} />
                  
    )
    
        return (
            
            <Container>
              <Content>
                {view}        
              </Content>
              <ModalComponent 
                showModal = {newsData.setModalVisible}
                articleData={newsData.modalArticleData}
                onClose={handleModalClose}
              />
            </Container>
          );
    
}


