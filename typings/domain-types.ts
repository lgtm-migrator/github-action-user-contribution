import boxen from 'boxen'

import { ColorSchemeType } from './enum-types'

/**
 * ConfigOptions
 * @desc Type representing configuration options
 */
export type ConfigOptions = {
    /**
     * Color configuration options
     */
    readonly colorOptions: ColorOptions
    /**
     * Account configuration options
     */
    readonly accountOptions: AccountOptions
}

//--------------------------------------------------------------------------------------------------
/**
 * ColorPalette
 * @desc Type representing color palette
 */
export type ColorPalette = string[]

//--------------------------------------------------------------------------------------------------
/**
 * ColorScheme
 * @desc Type representing color scheme
 */
export type ColorScheme = Record<ColorSchemeType, ColorPalette>

//--------------------------------------------------------------------------------------------------
/**
 * RequestOptions
 * @desc Type representing request options
 */
export type RequestOptions = {
    /**
     * Request url
     */
    readonly url: string
}

//--------------------------------------------------------------------------------------------------
/**
 * ColorOptions
 * @desc Type representing color options
 */
export type ColorOptions = {
    /**
     * Color scheme options
     */
    readonly colorScheme: ColorSchemeType
}

//--------------------------------------------------------------------------------------------------
/**
 * StyleOptions
 * @desc Type representing style options
 */
export type StyleOptions = {
    /**
     * Style theme
     */
    readonly theme: string
    /**
     * Style layout
     */
    readonly layout: string
}

//--------------------------------------------------------------------------------------------------
/**
 * RepoOptions
 * @desc Type representing repository options
 */
export type AccountOptions = {
    /**
     * GitHub username
     */
    readonly userName: string
    /**
     * Date range
     */
    readonly dateRange: DateRange
}

//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profiles options
 */
export type ProfileOptions = {
    /**
     * Request configuration options
     */
    readonly requestOptions: RequestOptions
    /**
     * Color configuration options
     */
    readonly colorOptions: ColorOptions
    /**
     * Output configuration options
     */
    readonly outputOptions?: boxen.Options
}

//--------------------------------------------------------------------------------------------------
/**
 * Position
 * @desc Type representing position
 */
export type Position = {
    /**
     * X-position coordinate
     */
    x: number
    /**
     * X-position coordinate
     */
    y: number
}

//--------------------------------------------------------------------------------------------------
/**
 * ContributionGraphData
 * @desc Type representing user contribution graph data
 */
export type ContributionGraphData = {
    /**
     * Contribution cell data
     */
    cells: GraphDataItem[]
    /**
     * Color palette
     */
    colorPalette: ColorPalette
}

//--------------------------------------------------------------------------------------------------
/**
 * GraphDataItem
 * @desc Type representing contribution graph data item
 */
export type GraphDataItem = {
    /**
     * Contribution X-graph coordinate
     */
    x: number
    /**
     * Contribution Y-graph coordinate
     */
    y: number
    /**
     * Contribution color
     */
    color: string
    /**
     * Contribution count
     */
    count: number
    /**
     * Contribution date
     */
    date: string
}

//--------------------------------------------------------------------------------------------------
/**
 * DateRange
 * @desc Type representing date range
 */
export type DateRange =
    | {
          from?: string | Date
          to?: string | Date
      }
    | { year?: number }

//--------------------------------------------------------------------------------------------------
