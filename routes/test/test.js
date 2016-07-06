import BookingTips from '../booking/BookingTips'
import CanBookCheck from '../booking/CanBookCheck'
import CheckOrderIsDuplicated from '../booking/CheckOrderIsDuplicated'

describe("预订须知测试", ()=> {
    it("不显示checkbox",()=> {
        expect(BookingTips.data.IsShowCheckBox).toEqual(false)
    })
})

describe("可定检查接口", ()=> {
    it("可定检查不通过",()=> {
        expect(CanBookCheck.errno).not.toEqual(0)
    })
})

describe("检查重复订单接口", ()=> {
    it("订单有重复",()=> {
        expect(CheckOrderIsDuplicated.errno).toEqual(1)
    })
})