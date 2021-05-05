const StatValue = require('./StatValue')

// also make changes in OCC and Race
class SecondaryStats {
    constructor(
        hp = new StatValue,
        hpLvl = new StatValue,
        hpDay = new StatValue,
        sdc = new StatValue,
        sdcLvl = new StatValue,
        sdcDay = new StatValue,
        mdc = new StatValue,
        mdcLvl = new StatValue,
        mdcDay = new StatValue,
        ppe = new StatValue,
        ppeLvl = new StatValue,
        ppeDay = new StatValue,
        isp = new StatValue,
        ispLvl = new StatValue,
        ispDay = new StatValue,
        horror = new StatValue
    ) {
        this.hp = hp;
        this.hp.name = 'HP';
        this.hpLvl = hpLvl;
        this.hpLvl.name = 'HP/lvl';
        this.hpDay = hpDay;
        this.hpDay.name = 'HP/day';
        this.hpDay.initialValue = 2;
        this.sdc = sdc;
        this.sdc.name = 'SDC';
        this.sdcLvl = sdcLvl;
        this.sdcLvl.name = 'SDC/lvl';
        this.sdcDay = sdcDay;
        this.sdcDay.name = 'SDC/day';
        this.sdcDay.initialValue = 4;
        this.mdc = mdc;
        this.mdc.name = 'MDC';
        this.mdcLvl = mdcLvl;
        this.mdcLvl.name = 'MDC/lvl';
        this.mdcDay = mdcDay;
        this.mdcDay.name = 'MDC/day';
        this.ppe = ppe;
        this.ppe.name = 'PPE';
        this.ppeLvl = ppeLvl;
        this.ppeLvl.name = 'PPE/lvl';
        this.ppeDay = ppeDay;
        this.ppeDay.name = 'PPE/day';
        this.isp = isp;
        this.isp.name = 'ISP';
        this.ispLvl = ispLvl;
        this.ispLvl.name = 'ISP/lvl';
        this.ispDay = ispDay;
        this.ispDay.name = 'ISP/day';
        this.horror = horror;
        this.horror.name = 'Horror Factor';
    }

    getHp() {
        return this.hp;
    }

    getHpLvl() {
        return this.hpLvl;
    }

    getHpDay() {
        return this.hpDay;
    }

    getSdc() {
        return this.sdc;
    }

    getSdcLvl() {
        return this.sdcLvl;
    }

    getSdcDay() {
        return this.sdcDay;
    }

    getMdc() {
        return this.mdc;
    }

    getMdcLvl() {
        return this.mdcLvl;
    }

    getMdcDay() {
        return this.mdcDay;
    }

    getPpe() {
        return this.ppe;
    }

    getPpeLvl() {
        return this.ppeLvl;
    }

    getPpeDay() {
        return this.ppeDay;
    }

    getIsp() {
        return this.isp;
    }

    getIspLvl() {
        return this.ispLvl;
    }

    getIspDay() {
        return this.ispDay;
    }

    getHorror() {
        return this.horror;
    }
}

module.exports = SecondaryStats;