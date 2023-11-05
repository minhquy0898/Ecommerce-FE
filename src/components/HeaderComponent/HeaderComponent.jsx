import React, { useEffect, useState } from 'react'
import './HeaderComponent.css'
import { Badge, Button, Col, Popover, Row } from 'antd'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined, PhoneOutlined } from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { SearchProps } from 'antd/es/input';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide';


const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false, isHiddenPhone = false }) => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [loading, setLoading] = useState(false)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }
    const handleNavigationHome = () => {
        navigate('/')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
    }, [user?.name, user?.avatar])
    const content = (
        <div className='content_popup'>
            <p className='popup' onClick={() => navigate('/profile-user')}>Thông tin cá nhân</p>
            {user?.isAdmin && (
                <p className='popup' onClick={() => navigate('/system/admin')}>Giám sát hệ thống</p>
            )}
            <p className='popup' onClick={handleLogout}>Đăng xuất</p>
        </div>
    )
    // const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return (
        <div>
            <Row className='header_row' style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
                <Col onClick={handleNavigationHome} className='header_img' span={6}><img src="https://donghoduyanh.com/images/config/logo_new_mt_1578296465.png" alt="" /></Col>
                {!isHiddenSearch && (
                    <Col className='header_search' span={9}>
                        <ButtonInputSearch
                            textBtn="Tìm kiếm"
                            placeholder="Bạn muốn tìm gì ?"
                        // onSearch={onSearch}
                        />
                    </Col>
                )}
                <Col className='header_col_3' span={9}>
                    {!isHiddenPhone && (
                        <div style={{ color: "#fff" }}>
                            <PhoneOutlined style={{ fontSize: '22px', paddingRight: '8px' }} />
                            <span className='font-14'>Gọi ngay 0898240032</span>
                        </div>
                    )}
                    <div className='header_account'>
                        <div>
                            {userAvatar ? (
                                <img src={userAvatar} style={{
                                    height: '30px',
                                    width: '30px',
                                    marginTop: '8px',
                                    marginRight: '6px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }} alt='Avatar' />
                            ) : (
                                <UserOutlined style={{ fontSize: '22px', paddingRight: '8px' }} />
                            )}
                        </div>
                        {user?.access_token ? (
                            <>
                                <Popover content={content} trigger="click">
                                    <div style={{ cursor: 'pointer' }}>{userName?.length ? userName : user?.email}</div>
                                </Popover>
                            </>
                        ) : (
                            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                                <span>Đăng nhập/Đăng ký</span>
                                <div>
                                    <span>Tài khoản</span>
                                    <CaretDownOutlined />
                                </div>
                            </div>
                        )}
                    </div>
                    {!isHiddenCart && (
                        <div className='header_cart'>
                            <Badge count={4} size='small'>
                                <ShoppingCartOutlined style={{ fontSize: '26px', paddingRight: '8px', color: '#fff' }} />
                            </Badge>
                            <span className='cart'>Giỏ hàng</span>
                        </div>
                    )}
                </Col>

            </Row>
        </div>
    )
}

export default HeaderComponent
