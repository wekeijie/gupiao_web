<template>
  <div>
    <page-header>
      <template v-slot:headerCenter>帮助中心</template>
    </page-header>
    <div style="background-color: rgb(245, 245, 245);height: 5px;"></div>

    <div class="line-box flexBetween" v-for="item, index in list" :key="index" @click="goRouter(item)">
      <h2>{{ item.title }}</h2>
      <img src="../../assets/img/rightImg.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose, reactive, ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from "vue"

import PageHeader from '../../components/topWrap.vue'
import { useRouter, useRoute } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const list = ref(
  [
    {
      title: '新手入门',
      srcImg: '1',
      id: 1,
    },
    {
      title: '我的账户',
      rich_text: '<div style="position: relative;"><p data-v-623ecdf6=""><strong data-v-623ecdf6="">1、如何修改密码？</strong></p><p data-v-623ecdf6="">      注册后，每个账户会有两个密码，一个是会员登录密码，一个是交易密码，前者用于登  录您的账户，后者用于确保提现等相关交易的安全，初始的交易密码跟登录密码是一样的，建议您注册后立即进行修改。您可以随时在“我的账户”-“基本设置&amp;头像与密码”-“修改密码/修改支付密码”中修改您的密码。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">2、如何进行提款?</strong></p><p data-v-623ecdf6="">      第一步：点击我的账户<br data-v-623ecdf6="">      第二步：填入您注册的手机号码<br data-v-623ecdf6="">      第三步：填入您的登录号码<br data-v-623ecdf6="">      第四步：填入右边显示的验证码<br data-v-623ecdf6="">      第五步：点击登入到您的会员中心<br data-v-623ecdf6="">      第六步：点击提现<br data-v-623ecdf6="">      第七步：点击添加银行卡<br data-v-623ecdf6="">      第八步：选择您要出金的开户银行<br data-v-623ecdf6="">      第九步：填写您的银行卡号，银行信息需和您认证的信息一致<br data-v-623ecdf6="">      第十步：点击添加，即可完成<br data-v-623ecdf6="">      第十一步：点击您要提现的金额<br data-v-623ecdf6="">      第十二步：填写您设置的提现密码<br data-v-623ecdf6="">      第十三步:点击确认提现</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">3、如何提升账户安全等级？</strong></p><p data-v-623ecdf6="">       成功注册账户后，可以进行实名认证、修改支付密码，申请VIP会员等相关操作，加强账户安全等级。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">4、如何绑定到账银行卡？</strong></p><p data-v-623ecdf6="">       登录“我的账户”页面中，点击左侧“资金管理-银行账户”，依次确认输入正确的持卡人、卡号和开户行地点。（注：提现到账银行卡户名必须与实名认证姓名保持一致。）</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">5、如何进行实名认证？</strong></p><p data-v-623ecdf6="">     我的账户-认证中心-实名认证，按照要求填写即可，提交之后客服人员会尽快审核。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">6、如何修改手机号码？</strong></p><p data-v-623ecdf6="">      第一步：首先登入您的会员账号，点击个人设置按钮。<br data-v-623ecdf6="">      第二步：点击修改按钮。<br data-v-623ecdf6="">      第三步：点击获取手机短信。<br data-v-623ecdf6="">      第四步：查看手机并填入您的验证码。<br data-v-623ecdf6="">      第五步：输入您的手机号码。<br data-v-623ecdf6="">      第六步：点击修改按钮。<br data-v-623ecdf6="">      恭喜您已经绑定新手机号码完毕！</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">7、配资中如何提取盈利？</strong></p><p data-v-623ecdf6="">     第一步：点击我的账户，登入会员。<br data-v-623ecdf6="">     第二步：点击进行中的配资列表。<br data-v-623ecdf6="">     第三步：选择您要提取盈利的方案，点击方案详情。<br data-v-623ecdf6="">     第四步：点击盈利出金。<br data-v-623ecdf6="">     第五步：输入您要提取的金额。<br data-v-623ecdf6="">      提取盈利成功，关注会员余额变动。</p><uni-resize-sensor><div><div></div></div><div><div></div></div></uni-resize-sensor></div>',
      id: 2,
    },
    {
      title: '配资介绍',
      rich_text: '<div style="position: relative;"><p data-v-623ecdf6="">所谓股票配资是这样的，股票配资公司可以在您资金的基础之上再给您提供1-10倍的配资，比方说您有10万，股票配资公司可以在给您提供10万到100万的资金，但操作的账户是股票配资公司提供的。账户完全由您来操作，盈利全部归您，亏损的话，也需要有您来承担。股票配资公司收固定的利息。</p><p data-v-623ecdf6=""> 在进行股票配资前，需要先签署一份股票配资合同，协议里对合作具体细节及注意事项写的都比较详细。在签署协议时一定要先把一些合作细节具体都看一遍。此外需要注意的一点就是，进行股票配资其实是把股民的自有资金打到股票配资公司提供的银行卡上，操作账户是由股票配资公司提供的。</p><p data-v-623ecdf6=""> 对于股票配资业务所产生的误区解答：</p><p data-v-623ecdf6="">误区：对股票配资稍微了解一点的人可能都认为进行股票配资，放大了交易的比例，扩大了风险，所以认为股票配资不可行。</p><p data-v-623ecdf6="">解答：这种认识很片面，首先股票配资使一部分缺少资金的人能抓住有利的进场时间迅速获利，这是其一；</p><p data-v-623ecdf6="">其二，股票配资可以使那些正做其他生意的人不至于因为把资金投入期货市场股票市场而耽误生意的运营；</p><p data-v-623ecdf6="">其三，股票配资，需要由出资方监督，这样对股票配资者来说就是一种提醒，使股票配资者能及时止损，使他们不至于把全部资金全部投入以至于亏完，通过阶梯式的资金投入也一定程度上限制了投资者的赌博心理，为调整操作思路赢得了时间。</p><p data-v-623ecdf6=""> 股票配资业务中收费都有哪些？</p><p data-v-623ecdf6="">我们最佳策略是规范的公司，制度和流程都是非常透明的，只收取管理费，不会有其他任何隐性收费。</p><uni-resize-sensor><div><div></div></div><div><div></div></div></uni-resize-sensor></div>',
      id: 3,
    },
    {
      title: '提款须知',
      rich_text: '<div style="position: relative;"><p data-v-623ecdf6=""><strong data-v-623ecdf6="">如何进行提款？</strong></p><p data-v-623ecdf6="">       第一步：点击我的账户<br data-v-623ecdf6="">       第二步：填入您注册的手机号码<br data-v-623ecdf6="">       第三步：填入您的登录号码<br data-v-623ecdf6="">       第四步：填入右边显示的验证码<br data-v-623ecdf6="">       第五步：点击登入到您的会员中心<br data-v-623ecdf6="">       第六步：点击提现<br data-v-623ecdf6="">       第七步：点击添加银行卡<br data-v-623ecdf6="">       第八步：选择您要出金的开户银行<br data-v-623ecdf6="">       第九步：填写您的银行卡号，银行信息需和您认证的信息一致<br data-v-623ecdf6="">       第十步：点击添加，即可完成<br data-v-623ecdf6="">       第十一步：点击您要提现的金额<br data-v-623ecdf6="">       第十二步：填写您设置的提现密码<br data-v-623ecdf6="">       第十三步:点击确认提现</p><uni-resize-sensor><div><div></div></div><div><div></div></div></uni-resize-sensor></div>',
      id: 1,
    },
    {
      title: '常见问题',
      rich_text: '<div style="position: relative;"><p data-v-623ecdf6=""><strong data-v-623ecdf6="">A.注册时手机收不到验证码</strong><br data-v-623ecdf6="">答：再三核实输入的手机号码，确认无误还是未收到的话，请及时联系在线客服。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">B.如何使用利息券</strong><br data-v-623ecdf6="">答：申请新开合约以及合约自动续费时，系统自动优先使用利息券抵扣费用，直到用完为止，无时间期限。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">C.如何推荐好友</strong><br data-v-623ecdf6="">答：进入app我的，头像旁边有一个推荐码，让朋友注册时填写此推荐码即可。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">D.结算后保证金返还</strong><br data-v-623ecdf6="">答：会员卖出股票，终止合约后资金立即回到账户余额里。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">E.交易费用</strong><br data-v-623ecdf6="">按天万6，按周万28，按月万60，免息配资无需收取费用，但盈利结算时平台将收取20%的手续费。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">F.合约穿仓免责</strong><br data-v-623ecdf6="">答：会员账户里的合约遇到穿仓的情况，用户无需自己承担，平台穿仓免赔。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">G.如何处理停牌转让</strong><br data-v-623ecdf6="">答：可选择持有到复牌（期间需缴纳该支股票的账户管理费）；也可自愿选择转让给平台，但自停牌日起两日内须告知平台客服，按照该支股票停牌前最后的盘面价格进行结算。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">H.出入金及时性</strong><br data-v-623ecdf6="">交易日8:30-18:00之间出入金1-3分钟内到账；非交易日12:00-18:00出入金最迟五分钟内到账。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">I.持仓时间</strong><br data-v-623ecdf6="">一般来说，只要会员账户内的合约满足所有的持仓条件，平台对于持仓时间没有限制。</p><p data-v-623ecdf6=""><strong data-v-623ecdf6="">J.用户信息保障</strong><br data-v-623ecdf6="">1）最佳策略注重会员资金安全及个人信息保障，最大程度做到专业化及规范化；<br data-v-623ecdf6="">2）最佳策略严格规范工作人员的行为举止，签署保密协议，绝对不允许泄露会员任何信息；<br data-v-623ecdf6="">3）最佳策略严格保护每位用户的个人信息以及交易信息。</p><uni-resize-sensor><div><div></div></div><div><div></div></div></uni-resize-sensor></div>',
      id: 2,
    },
    {
      title: '推广赚钱',

      srcImg: '2',
      id: 3,
    },
    {
      title: '跟单规则',
      srcImg: '3',
      id: 2,
    },
    {
      title: '新股申购规则须知',
      rich_text: '<div style="position: relative;"><p data-v-623ecdf6="">新股申购规则须知：<br data-v-623ecdf6="">  一、T-2日（含）前20个交易日日均持有1万元非限售A股市值才可申购新股，上证、深证市场分开单独计算；<br data-v-623ecdf6="">  二、客户同一个证券账户多处托管的，其市值合并计算。客户持有多个证券账户的，多个证券账户的市值合并计算。融资融券客户信用证券账户的市值合并计算。<br data-v-623ecdf6="">  三、上证每持有1万元市值可申购1000股，深证每持有5000元市值可申购500股；<br data-v-623ecdf6=""> 四、深证有市值的普通或信用账户才可申购，上证只要有指定交易的账户即可申购，客户只有第一次下单有效（按发行价买入）且不能撤单；<br data-v-623ecdf6="">  五、申购时间：上证9:30-11:30/13:00-15:00，深证9:15-11:30/13:00-15:00；<br data-v-623ecdf6="">  六、投资者申购时无需缴付认购资金，新股发行采用市值申购的方法，投资者只要有市值就能申购。T+2日确认中签后需确保16:00有足够资金用于新股申购的资金交收；<br data-v-623ecdf6="">  七、客户中签但未足额缴款视为放弃申购，连续12个月内累计3次中签但放弃申购者，自最近一次放弃申购次日起6个月（按180个自然日计算，含次日）内不得参与网上新股申购。<br data-v-623ecdf6="">  新股申购新旧重要特点：<br data-v-623ecdf6="">  1、 投资者在进行申购时无需缴付申购资金，采用市值申购的方法，投资者只要有市值就能申购。确认中签后再缴款。<br data-v-623ecdf6="">  2、 投资者申购新股摇号中签后，确保T+2日16:00有足够资金用于新股认购资金交收。<br data-v-623ecdf6="">  3、 连续12个月内累计3次中签但放弃申购将纳入“打新黑名单”。<br data-v-623ecdf6="">科创版规则：<br data-v-623ecdf6="">  第一，50万资产门槛。<br data-v-623ecdf6="">  第二，参与证券交易24个月以上。<br data-v-623ecdf6="">  第三，上证市场持仓市值达到 10000 元以上。<br data-v-623ecdf6="">  这里提醒大家注意，第一个条件和第三个条件在计算口径上存在较大差异。<br data-v-623ecdf6="">  第一个条件：50万资产门槛，是指申请开通科创板权限前 20 个交易日，证券账户及资金账户内的资产日均不低于人民币 50 万元（不包括该投资者通过融资融券融入的资金和证券）。证券账户和资金账户里的资产都算，也就是说资金账户里一直放着50万元，不买股票也可以。沪、深两市的股票、可转债等证券资产都算，但是融资融券借来的资产不算。<br data-v-623ecdf6="">  第二个条件：上证市场持仓市值达到 10000 元以上。这里的市值以投资者为单位，按其T-2日（T日为发行公告确定的网上申购日）前20个交易日（含T-2日）的日均持有市值计算。融资融券账户的市值也算在内，但深证市场持仓市值不算。<br data-v-623ecdf6="">  每5000元市值可申购一个申购单位，不足5000元的部分不计入申购额度。每一个新股申购单位为500股，申购数量应当为500股或其整数倍，但申购上限不得超过本次网上初始发行股数的千分之一。如果同一天有多只新股发行，可重复使用额度。</p><uni-resize-sensor><div><div></div></div><div><div></div></div></uni-resize-sensor></div>',
      id: 3,
    }
  ]
)
const goRouter = (item) => {
  if (item.rich_text) {

    $router.push({
      path: '/RichText', query: {
        title: item.title,
        type: 2, id: item.id,
        rich: item.rich_text
      }
    })
  } else {

    $router.push({
      path: '/longImg', query: {
        title: item.title,
        type: 2, id: item.id,
        srcImg: item.srcImg
      }
    })
  }
}


</script>
<style lang="scss" scoped>
.line-box {
  padding: 15px;
  border-bottom: solid 0.5px #e5e5e5;

  h2 {
    font-size: 15px;
    letter-spacing: 0.5px;
    width: 90%;
    color: #2c2e3a;
  }

  img {
    width: 7px;
  }
}
</style>
