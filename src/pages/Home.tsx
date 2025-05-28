// HOOKS
import { useGet } from '@/hooks'

// TYPES
import { HighlightsData, StarsData, NewsData, CustomChartProps } from '@/types'

// Components
import {
  AvatarsList,
  Header,
  CustomChart,
  CustomTable,
  CardComp,
  StyledH2,
  StyledH3,
  StyledSpan,
} from '@/components'
import { Container, Grid } from '@mui/material'

// UTILS
import { currencyConverter, highConverter } from '@/utils'


function Home() {
  const {
    data: highlightsData,
    loading: highlightsLoading,
    error: highlightsError,
  } = useGet<HighlightsData[]>('sales/highlights')

    const {
    data: salesMonthData,
    loading: salesMonthLoading,
    error: salesMonthError,
  } = useGet<CustomChartProps>('sales/month')

  const {
    data: salesStarsData,
    loading: salesStarsLoading,
    error: salesStarsError,
  } = useGet<StarsData[]>('sales/stars')

  const {
    data: newsData,
    loading: newsLoading,
    error: newsError,
  } = useGet<NewsData[]>('news')

    const {
    data: salesYearData,
    loading: salesYearLoading,
    error: salesYearError,
  } = useGet<CustomChartProps>('sales/year')

  return (
    <>
      <Header />
      <Container className='mb-2' maxWidth="lg">
        <Grid container spacing={4}>
          {!highlightsError && (
            <>
              <Grid item xs={12} md={4}>
                <CardComp
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">
                        Total de vendas no mês
                      </StyledH2>
                      <StyledH3 className="mb-1" size={40} lineHeight={40}>
                        {currencyConverter(highlightsData[0].value)}
                      </StyledH3>
                      <StyledSpan>{highlightsData[0].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComp>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardComp
                  className={
                    highlightsData
                      ? highlightsData[1].subtitle
                      : 'skeleton-loading skeleton-loading-mh-1'
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1" color="white">
                        Meta do Mês
                      </StyledH2>
                      <StyledH3
                        className="mb-1"
                        color="white"
                        size={40}
                        lineHeight={40}
                      >
                        {currencyConverter(highlightsData[1].value)}
                      </StyledH3>

                      <StyledSpan color="white">
                        {highConverter(highlightsData[1].subtitle)}
                      </StyledSpan>
                    </>
                  )}
                </CardComp>
              </Grid>
              <Grid item xs={12} md={4}>
                <CardComp
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">Clientes contactados</StyledH2>
                      <StyledH3 className="mb-1" size={40} lineHeight={40}>
                        {highlightsData[2].value}
                      </StyledH3>
                      <StyledSpan>{highlightsData[2].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComp>
              </Grid>
            </>
          )}

          <Grid item xs={12} md={7}>
            {
              !salesMonthError && (
                 <CardComp className={salesMonthLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                  {
                    !salesMonthLoading && salesMonthData && (
                      <>
                        <StyledH2 className="mb-1">Valor de vendas no mês</StyledH2>
              <CustomChart
                labels={salesMonthData.labels.map((label) => label)}
                data={salesMonthData.data.map((data) => data)}
                type={salesMonthData.type}
              />
              </>
                    )}
            </CardComp>
              )}
           
          </Grid>

         <Grid item xs={12} md={5}>
  {!salesStarsError && (
    <CardComp
      className={
        salesStarsLoading
          ? 'skeleton-loading skeleton-loading-mh-2'
          : ''
      }
    >
      {!salesStarsLoading && salesStarsData && (
        <>
          <StyledH2 className="mb-1">
            Melhores Vendedores do Mês
          </StyledH2>
          <AvatarsList
            listData={salesStarsData.map((star) => ({
              name: star.name,
              subtitle: currencyConverter(star.value),
              avatar: 'dnc-avatar.svg',
            }))}
          />
        </>
      )}
    </CardComp>
  )}
</Grid>

          <Grid item xs={12} md={5}>
            {!newsError && (
              <CardComp className={newsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''}>
                {!newsLoading && newsData && (
                  <>
                    <StyledH2 className="mb-1">Notícias Relevantes</StyledH2>
                    <CustomTable
                      headers={['Título', 'Horário']}
                      rows={newsData.map((news) => [
                        <a className='ellipsis ellipsis-sm' href={news.link} target="_blank" >
                          {news.title}
                        </a>,
                        <a href={news.link} target="_blank">{news.date}</a>,
                      ])}
                    />
                  </>
                )}
              </CardComp>
            )}
          </Grid>


          <Grid item xs={12} md={7}>
            {!salesYearError && ( 
            <CardComp
      className={
        salesYearLoading
          ? 'skeleton-loading skeleton-loading-mh-2'
          : ''
      }
    >
      {!salesYearLoading && salesYearData && (
        <>
          <StyledH2 className="mb-1">
            Valor de vendas no ano
          </StyledH2>
          <CustomChart
            labels={salesYearData.labels.map((label) => label)}
                data={salesYearData.data.map((data) => data)}
                type={salesYearData.type}
          />
        </>
      )}
    </CardComp>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
