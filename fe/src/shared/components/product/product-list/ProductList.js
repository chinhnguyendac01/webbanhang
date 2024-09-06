import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
import ProductCard from '../product-card/ProductCard';
import HomePageAction from 'redux/home-page/action';
import CustomPagination from 'shared/components/admin/pagination/CustomPagination';

const ProductList = () => {
    const { locale } = useSelector((state) => state.App);
    const product = useSelector((state) => state.HomePage.productsData);
    const { t } = useTranslation();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(3);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const dispatch = useDispatch();

    // const handleOnClick = () => {
    //     window.scrollTo(0, 0);
    // }

    useEffect(() => {
        if (locale?.selected) {
            dispatch({
                type: HomePageAction.GET_PRODUCTS_START,
                locale: locale?.selected,
                per_page: perPage,
                page: page,
            });
        }
    }, [locale, page, perPage]);

    useEffect(() => {
        if (product?.data) {
            setTotal(product?.total);
            setTotalPages(Math.ceil(product?.total / product?.per_page));
        }
    }, [product]);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <div className="w-full px-0">
            <div className={styles['title']}>{t('product.title')}</div>
            {/* <div className={styles['showing']}>
                {t("tablepagination.showing")} {perPage} {t("tablepagination.of")} {total}
            </div> */}
            <div className={styles['list']}>
                {product?.data?.map((product, index) => (
                    <div className={styles['item']} key={index}>
                        <ProductCard props={product} />
                    </div>
                ))}
                {product?.data?.length === 2 ? (
                    <div className={styles['item-display']}></div>
                ) : product?.data?.length === 1 ? (
                    <>
                        <div className={styles['item-display']}></div>
                        <div className={styles['item-display']}></div>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <div
                className={`${styles['pagination-wrapper']} pagination-wrapper`}
            >
                <CustomPagination
                    totalPages={totalPages}
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
        </div>
    );
};
ProductList.defaultProps = {
    data: [],
    handleClick: () => {},
};
export default ProductList;
